import { getMedicos, setMedicos } from '../db/db.js';

export function listarMedicos(){
    return getMedicos();
}

export function visualizarMedico(id){
    const medico = getMedicos().find(m => m.id === id);
    return medico;
}

export function salvarMedico(medicos){
    setMedicos(medicos);
}