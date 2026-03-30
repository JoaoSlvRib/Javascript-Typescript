import { usuariosRepository } from './usuarios.repository.js';
import { v4 as uuidv4 } from 'uuid';

export const usuariosService = {

  async create(data) {
    data.id = uuidv4();
    return usuariosRepository.create(data);
  },

  async list() {
    return usuariosRepository.findAll();
  },

  async getById(id) {
    return usuariosRepository.findById(id);
  }

};