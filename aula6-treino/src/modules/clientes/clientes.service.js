import { ClientesRepository } from "./clientes.repository";

export class ClientesService {
    async create(data) {
    return ClientesRepository.create(data);
    }

    // O método list foi modificado para retornar um objeto com o array de clientes e o código de status HTTP
    async list() {
        if (cliente.lenght > 0) {
            return { valor: cliente, cod: 200 };
        }else {
            return { valor: "Nenhum cliente encontrado", cod: 204};
        }
    }

    async getById(id) {
        return ClientesRepository.findById(id);
    }

    async update(id, data) {
        const cliente = await ClientesRepository.findById(id);
        if (cliente) {
            return ClientesRepository.update(id, data);
        }
        else {
            throw new Error('Cliente não encontrado');
        }
    }

    async delete(id) {
        const cliente = await ClientesRepository.findById(id);
        if (cliente) {
            return ClientesRepository.delete(id);
        }
        else {
        throw new Error('Cliente não encontrado');
    }
    }
}