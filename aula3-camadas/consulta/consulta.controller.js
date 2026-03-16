import * as consultaService from './consulta.service.js';

//async await para treinar

export async function listarConsultas(req, res){
    const consultas = await consultaService.listarConsultas();
    res.json(consultas);
}

export async function visualizarConsulta(req, res){
    const consulta = await consultaService.visualizarConsulta(Number(req.params.id));
    res.json(consulta);
}

export async function criarConsulta(req, res){
    const { data, horario, medicoId, pacienteId } = req.body;
    const consulta = await consultaService.criarConsulta(data, horario, medicoId, pacienteId);
    res.status(201).json(consulta);
}

export async function atualizarConsulta(req, res){
    const id = Number(req.params.id);
    const { medicoId, pacienteId, data, horario } = req.body;
    const consulta = await consultaService.atualizarConsulta(id, medicoId, pacienteId, data, horario);
    res.json(consulta);
}

export async function atualizarParcialConsulta(req, res) {
   const id = Number(req.params.id);
   const { medicoId, pacienteId, data, horario } = req.body;
   const consulta = await consultaService.atualizarConsulta(id, medicoId, pacienteId, data, horario); 
   res.json(consulta);
}

export async function deletarConsulta(req, res){
    const id = Number(req.params.id);
    await consultaService.deletarConsulta(id);
    res.status(200).json(`A consulta com id ${id} foi excluída dos registros!`);
}//status 200 para confirmar deleção