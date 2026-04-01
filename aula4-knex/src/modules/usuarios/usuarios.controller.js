import { usuariosService } from './usuarios.service.js';

export const usuariosController = {

  async create(req, res) {
    const result = await usuariosService.create(req.body);
    return res.status(201).json(result);
  },

  async list(req, res) {
    const result = await usuariosService.list();
    return res.status(200).json(result);
  },

  async getById(req, res) {
    const { id } = req.params;
    const result = await usuariosService.getById(id);
    return res.status(200).json(result);
  },

  async update(req, res) {
    const { id } = req.params;
    const result = await usuariosService.update(id, req.body);
    return res.status(201).json(result);
  },

  async parcialUpdate(req, res) {
    const { id } = req.params;
    const result = await usuariosService.parcialUpdate(id, req.body);
    return res.status(201).json(result);
  },

  async delete(req, res) {
    const { id } = req.params;
    const result = await usuariosService.delete(id);
    return res.status(204).json(result);
  }
};