import { usuariosRepository } from './usuarios.repository.js';
import { v4 as uuidv4 } from 'uuid';

export const usuariosService = {
// Testando id randomico
  async create(data) {
    data.id = uuidv4();
    return usuariosRepository.create(data);
  },

  async list() {
    return usuariosRepository.findAll();
  },

  async getById(id) {
    return usuariosRepository.findById(id);
  },

 async update(id, data) {
  const user = await usuariosRepository.findById(id);

  if (!user) {
    throw new Error('Usuário não encontrado!');
  }

  const campos = ['nome','email','senha','data_nascimento','genero','bio'];

  for (const campo of campos) {
    if (data[campo] === undefined) {
      throw new Error(`Atualização incompleta: campo ${campo} é obrigatório`);
    }
  }

  const updatedUser = { id, ...data };

  return usuariosRepository.update(id, updatedUser);
},

  async parcialUpdate(id, data) {
    return usuariosRepository.parcialUpdate(id, data);
  },

  async delete(id) {
    return usuariosRepository.delete(id);
  }
};