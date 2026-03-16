const db = {
    medicos: [],
    pacientes: [],
    consultas: []
}

export function getMedicos(){
    return db.medicos;
}
export function setMedicos(medicos){
    db.medicos = medicos;
}

export function getPacientes(){
    return db.pacientes;
}
export function setPacientes(pacientes){
    db.pacientes = pacientes;
}

export function getConsultas(){
    return db.consultas;
}
export function setConsultas(consultas){
    db.consultas = consultas;
}