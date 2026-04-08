import { usuariosService } from './usuarios.service.js';

export const usuariosController = {

  async create(req, res) {
    console.log('Criando usuário:', req.body);
    const user = await usuariosService.create(req.body);
    return res.status(201).json(user);
  },

  async list(req, res) {
    const users = await usuariosService.list();
    return res.status(200).json(users);
  },

  async getById(req, res) {
    const { id } = req.params;
    const user = await usuariosService.getById(id);
    return res.status(200).json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const user = await usuariosService.update(id, req.body);
    return res.status(200).json(user);
  },

  async parcialUpdate(req, res) {
    const { id } = req.params;
    const user = await usuariosService.parcialUpdate(id, req.body);
    return res.status(200).json(user);
  },

  async delete(req, res) {
    console.log(`Deletando usuário com id: ${req.params.id}`);
    const { id } = req.params;
    const user = await usuariosService.delete(id);
    return res.status(200).json(user);
  }
};