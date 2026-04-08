import { database } from "../../config/knexfile";

export class ClientesRepository {
    async create(cliente) {
        await database('clientes').insert(cliente);
        return database('clientes').where({ id: cliente.id }).first();
    }

    async findAll() {
        return database('clientes').select('*');
    }

    async findById(id) {
        return database('clientes').select('*').where({ id }).first();
    }

    async update(id, data) {
        await database('clientes').update(data).where({ id });
        return database('clientes').where({ id }).first();
    }
    
    async delete(id) {
        const deleted = await database('clientes').where({ id }).first();
        await database('clientes').where({ id }).delete();
        return deleted;
    }
}