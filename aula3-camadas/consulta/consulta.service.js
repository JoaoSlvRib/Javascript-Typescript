import * as consultaRepository from './consulta.repository.js';
import * as medicoRepository from '../medico/medico.repository.js';

export function listarConsultas(){
    return consultaRepository.listarConsultas();
}

export function visualizarConsulta(id){
    return consultaRepository.visualizarConsulta(id);
}

export function criarConsulta(pacienteId, medicoId, data, horario){
    const consultas = consultaRepository.listarConsultas();
    let indisponivel = false;
    for(const c of consultas){
        if (medicoId === c.medicoId && data === c.data && horario === c.horario){
            insdisponivel = true;
            break;
        }
    }
    if(indisponivel){
        const medico = medicoRepository.visualizarMedico(medicoId);
    const nome = medico.nome;
    //capturar o nome do médico para colocar na mensagem de erro

        throw new Error(`Desculpe, o médico ${nome} não tem horário disponível para essa data!`);
}
    const novaConsulta = {
        id: consultas.length + 1,
        pacienteId,
        medicoId,
        data,
        horario
    }
    consultas.push(novaConsulta);
    consultaRepository.salvarConsulta(consultas);
    return novaConsulta;
}

export function atualizarConsulta(id, pacienteId, medicoId, data, horario){
    const consultas = consultaRepository.listarConsultas();
    const consulta = consultas.find(c => c.id === id);
    if(consulta){
        consulta.medicoId = medicoId;
        consulta.pacienteId = pacienteId;
        consulta.data = data;
        consulta.horario = horario;

        consultaRepository.salvarConsulta(consultas);
    }
    return consulta;
}

export function atualizarParcialConsulta(id, pacienteId, medicoId, data, horario){
    const consultas = consultaRepository.listarConsultas();
    const consulta = consultas.find(c => c.id === id);
    if(consulta){
        if(medicoId){
            consulta.medicoId = medicoId;
        }
        if(pacienteId){
            consulta.pacienteId = pacienteId;
        }
        if(data){
            consulta.data = data;
        }
        if(horario){
            consulta.horario = horario;
        }
        consultaRepository.salvarConsulta(consultas);
    }
    return consulta;
}

export function deletarConsulta(id){
    const consulta = consultaRepository.listarConsultas();
    const novasConsultas = consulta.filter(c => c.id !== id);
    consultaRepository.salvarConsulta(novasConsultas);
    return;
}