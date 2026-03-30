import { database } from '../../config/knexfile.js';

export const usuariosRepository = {

  async create(data) {
     console.log('inserindo usuario', data)
    return database('usuarios').insert(data);
  },

  async findAll() {
    return database('usuarios').select('*');
  },

  async findById(id) {
    return database('usuarios').where({ id }).first();
  }
};