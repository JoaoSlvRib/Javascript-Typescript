import { interessesService } from "./interesses.service.js";

export const interessesController = {
    async create (req, res) {
        console.log('Interesse:', req.body);
        const interesse = await interessesService.create(req.body);
        return res.status(201).json(interesse);
    },
    async list(req, res) {
        const interesses = await interessesService.list();
        return res.status(200).json(interesses);
    },
    async getById(req, res) {
        const { id } = req.params;
        const interesse = await interessesService.getById(id);
        return res.status(200).json(interesse);
    },
    async update (req, res) {
        const { id } = req.params;
        const interesse = await interessesService.update(id, req.body);
        return res.status(200).json(interesse);
    },
    async delete(req, res) {
        console.log(`Deletando interesse com id: ${req.params.id}`);
        const { id } = req.params;
        const interesse = await interessesService.delete(id);
        return res.status(200).json(interesse);
    }
}