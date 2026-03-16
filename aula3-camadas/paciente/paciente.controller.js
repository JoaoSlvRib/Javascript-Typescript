import * as pacienteService from './paciente.service.js';

//async await para treinar

export async function listarPacientes(req, res){
    const pacientes = await pacienteService();
    res.json(pacientes);
}

export async function visualizarPaciente(req, res){
    const paciente = await pacienteService.visualizarPaciente(Number(req.params.id));
    res.json(paciente);
}

export async function criarPaciente(req, res) {
    const { nome, cpf, dataNascimento } = req.body;
    const paciente = await pacienteService.criarPaciente(nome, cpf, dataNascimento);
    res.status(201).json(paciente);
}

export async function atualizarPaciente(req, res) {
    const id = Number(req.params.id);
    const { nome, cpf, dataNascimento } = req.body;
    const paciente = await pacienteService.atualizarPaciente(id, nome, cpf, dataNascimento);
    res.json(paciente);
}

export async function atualizarParcialPaciente(req, res){
    const id = Number(req.params.id);
    const { nome, cpf, dataNascimento } = req.body;
    const paciente = await pacienteService.atualizarParcialPaciente(id, nome, cpf, dataNascimento);
    res.json(paciente);
}

export async function deletarPaciente(req, res) {
    const id = Number(req.params.id);
    await pacienteService.deletarPaciente(id);
    res.status(200).json(`Paciente de id: ${id} foi excluído dos registros!`)
}//status 200 para confirmar deleção