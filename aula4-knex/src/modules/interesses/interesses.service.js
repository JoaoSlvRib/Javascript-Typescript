import { interessesRepository } from "./interesses.repository.js";

export const interessesService = {
    async create({ nome }) {            
        if (!nome) {
            throw new Error('É necessário fornecer um nome para criar um interesse.');
        }
        return interessesRepository.create({ nome });
    },
    async list() {
        return interessesRepository.findAll();
    },

    async getById(id) {
        const interesse = await interessesRepository.findById(id);
        if (interesse) {
            return interesse;
        }
        else {
            throw new Error(`Interesse com ID ${id} não encontrado.`);
        };
    },
    async update (id, { nome }) {
        const interesse = await interessesRepository.findById(id);
        if (!nome) {
            throw new Error('É necessário fornecer um nome para atualizar o interesse.');
        }
        if (interesse) {
            return interessesRepository.update(id, nome);
        }
        else {
            throw new Error(`Interesse com ID ${id} não encontrado.`);
        }
        
    },
    async delete(id) {
        const interesse = await interessesRepository.findById(id);
        if (interesse) {
            return interessesRepository.delete(id);
        }
        else {
            throw new Error(`Interesse com ID ${id} não encontrado.`);
        };
    }
    }