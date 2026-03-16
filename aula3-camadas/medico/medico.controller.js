import * as medicoService from './medico.service.js'

//async await para treinar

export async function listarMedicos(req, res){
    const medicos = await medicoService.listarMedicos();
    res.json(medicos);
}

export async function visualizarMedico(req, res){
    const medico = await medicoService.visualizarMedico(Number(req.params.id));
    res.json(medico);
}

export async function criarMedico(req, res){
    const { nome, especialidade } = req.body;
    const medico = await medicoService.criarMedico(nome, especialidade);
    res.status(201).json(medico);
}

export async function atualizarMedico(req, res){
    const id = Number(req.params.id);
    const { nome, especialidade } = req.body;
    const medico = await medicoService.atualizarMedico(id, nome, especialidade);
    res.json(medico);
}

export async function atualizarParcialMedico(req, res){
    const id = Number(req.params.id);
    const { nome, especialidade } = req.body;
    const medico = await medicoService.atualizarParcialMedico(id, nome, especialidade);
    res.json(medico);
}

export async function deletarMedico(req, res){
    const id = Number(req.params.id);
    await medicoService.deletarMedico(id);
    res.status(200).json(`Medico com id ${id} foi excluído dos registros!`);
}//status 200 para confirmar deleção