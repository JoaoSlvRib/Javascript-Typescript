import { ClientesService } from "./clientes.service";

export class ClientesController {
    async create(req, res) {
        try {
            const cliente = await ClientesService.create(req.body);
            res.status(200).json(`Cliente criado: ${cliente.nome}`);
        }
        catch (error) {
            console.error('Erro ao criar cliente:', error);
            res.status(500).json({ error: 'Erro ao criar cliente'});
        }
    }

    async list(req, res) {
        try {
            const clientes = await ClientesService.list();
            res.status(clientes.cod).json(clientes.valor);
        }
        catch (error) {
            console.error('Erro ao listar clientes:', error);
            res.status(500).json({ error: 'Erro ao listar clientes'});
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const cliente = await ClientesService.getById(id);
            if (cliente) {
                res.status(200).json(cliente);
            }
            else {
                res.status(404).json({ error: 'Cliente não encontrado' });
            }
        }
        catch (error) {
            console.error('Erro ao buscar cliente:',  error);
            res.status(500).json({ error: 'Erro ao buscar cliente' });
        }
}

    async update(req, res) {
        const { id } = req.params;
        try {
            const cliente = await ClientesService.update(id, req.body);
            res.status(200).json(cliente);
        }
        catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            res.status(500).json({ error: 'Erro ao atualizar cliente' });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const cliente = await ClientesService.delete(id);
            res.status(200).json(cliente);
        }
        catch (error) {
            console.error('Erro ao deletar cliente:', error);
            res.status(500).json({ error: 'Erro ao deletar cliente' });
        }
    }
}