import * as pacienteRepository from './paciente.repository.js';
import { getConsultas } from '../db/db.js';

export function listarPacientes(){
    return pacienteRepository.listarPacientes();
}

export function visualizarPaciente(id){
    const paciente = pacienteRepository.visualizarPaciente(id);
    if(paciente){
        const consultas = getConsultas().filter(c => c.pacienteId === paciente.id);
        paciente.consultas = consultas;
    }
    return paciente;
}

export function criarPaciente(nome, cpf, dataNascimento){
    const pacientes = pacienteRepository.listarPacientes();
    const novoPaciente = {
        id: pacientes.length + 1,
        nome,
        cpf,
        dataNascimento
    }
    pacientes.push(novoPaciente);
    pacienteRepository.salvarPaciente(pacientes);
    return novoPaciente;
}

export function atualizarPaciente(id, nome, cpf, dataNascimento){
    const pacientes = pacienteRepository.listarPacientes();
    const paciente = pacientes.find(m => m.id === id);
    if(paciente){
        paciente.nome = nome;
        paciente.cpf = cpf;
        paciente.dataNascimento = dataNascimento;
        pacienteRepository.salvarPaciente(pacientes);
    }
    return paciente;
}

export function atualizarParcialPaciente(id, nome, cpf, dataNascimento){
    const pacientes = pacienteRepository.listarPacientes();
    const paciente = pacientes.find(m => m.id === id);
    if(paciente){
        if(nome) paciente.nome = nome;
        if(cpf) paciente.cpf = cpf;
        if(dataNascimento) paciente.dataNascimento = dataNascimento;
        pacienteRepository.salvarPaciente(pacientes);
    }
    return paciente;
}

export function deletarPaciente(id){
    const pacientes = pacienteRepository.listarPacientes();
    const novosPacientes = pacientes.filter(m => m.id !== id);
    pacienteRepository.salvarPaciente(novosPacientes);
    return;
}