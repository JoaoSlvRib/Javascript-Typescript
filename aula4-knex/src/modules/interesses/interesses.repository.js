import { database } from '../../config/knexfile.js';

export const interessesRepository = {
async create({ nome }) {
    await database('interesses').insert({ nome });
    return { nome };
},

async findAll() {
    return database('interesses').select('*');
},

async findById(id) {
    return database('interesses').where({ id }).first();
},

async update(id, nome) {
    await database('interesses').where({ id }).update({ nome });
    return database('interesses').where({ id }).first();
},

async delete(id) {
    const deleted = await database('interesses').where({ id }).first();
    await database('interesses').where({ id }).delete();
    return deleted;
    }
};
