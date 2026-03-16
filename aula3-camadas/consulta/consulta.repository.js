import { getConsultas, setConsultas } from "../db/db.js";

export function listarConsultas(){
    return getConsultas();
}

export function visualizarConsulta(id){
    const consulta = getConsultas().find(c => c.id === id);
    return consulta;
}

export function salvarConsulta(consultas){
    setConsultas(consultas);
}