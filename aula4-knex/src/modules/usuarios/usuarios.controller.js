import { usuariosService } from './usuarios.service.js';

export const usuariosController = {

  async create(req, res) {
    const result = await usuariosService.create(req.body);
    return res.status(201).json(result);
  },

  async list(req, res) {
    const result = await usuariosService.list();
    return res.json(result);
  },

  async getById(req, res) {
    const { id } = req.params;
    const result = await usuariosService.getById(id);
    return res.json(result);
  }

};