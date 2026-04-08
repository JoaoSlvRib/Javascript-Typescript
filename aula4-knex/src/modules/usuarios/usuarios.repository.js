import { database } from '../../config/knexfile.js';

export const usuariosRepository = {

  async create(data) {
    await database('usuarios').insert(data);
    return database('usuarios').where({ email: data.email }).first();
  },

  async findAll() {
    return database('usuarios').select('*');
  },

  async findById(id) {
    return database('usuarios').where({ id }).first();
  },

  async update(id, data) {
    await database('usuarios').where({ id }).update(data);
    return database('usuarios').where({ id }).first();
  },

  async parcialUpdate(id, data) {
    await database('usuarios').where({ id }).update(data);
    return database('usuarios').where({ id }).first();
  },

  async delete(id) {
    const deleted = await database('usuarios').where({ id }).first();
    await database('usuarios').where({ id }).delete();
    return deleted;
  }
};