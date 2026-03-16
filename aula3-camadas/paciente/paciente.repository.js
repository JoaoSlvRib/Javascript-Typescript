import { getPacientes, setPacientes } from '../db/db.js';

export function listarPacientes(){
    return getPacientes();
}

export function visualizarPaciente(id){
    const paciente = getPacientes().find(m => m.id === id);
    return paciente;
}

export function salvarPaciente(pacientes){
    setPacientes(pacientes);
}