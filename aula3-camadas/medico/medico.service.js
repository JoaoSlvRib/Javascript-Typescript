import * as medicoRepository from './medico.repository.js';
import { getConsultas } from '../db/db.js';

export function listarMedicos(){
    return medicoRepository.listarMedicos();
}

export function visualizarMedico(id){
    const medico = medicoRepository.visualizarMedico(id);
    if(medico){
        const consultas = getConsultas().filter(c => c.medicoId === medico.id);
        medico.consultas = consultas;
    }
    return medico;
}

export function criarMedico(nome, especialidade){
    const medicos = medicoRepository.listarMedicos();
    const novoMedico = {
        id: medicos.length + 1,
        nome,
        especialidade
    }
    medicos.push(novoMedico);
    medicoRepository.salvarMedico(medicos);
    return novoMedico;
}

export function atualizarMedico(id, nome, especialidade){
    const medicos = medicoRepository.listarMedicos();
    const medico = medicos.find(m => m.id === id);
    if(medico){
        medico.nome = nome;
        medico.especialidade = especialidade;
        medicoRepository.salvarMedico(medicos);
    }
    return medico;
}

export function atualizarParcialMedico(id, nome, especialidade){
    const medicos = medicoRepository.listarMedicos();
    const medico = medicos.find(m => m.id === id);
    if(medico){
        if(nome) medico.nome = nome;
        if(especialidade) medico.especialidade = especialidade;
        medicoRepository.salvarMedico(medicos);
    }
    return medico;
}

export function deletarMedico(id){
    const medicos = medicoRepository.listarMedicos();
    const novosMedicos = medicos.filter(m => m.id !== id);
    medicoRepository.salvarMedico(novosMedicos);
    return;
}