import * as alunosService from './service.js';

export async function listarAluno(req, res){
    const aluno = await alunosService.listar();
    return res.status(200).json(aluno);
}

export async function visualizarAluno(req, res){
    const id = Number(req.params.id);
    const aluno = await alunosService.visualizar(id);
    return res.status(200).json(aluno); 
}

export async function criarAluno(req, res){
    const { nome, matricula } = req.body;
    const aluno = await alunosService.criar(nome, matricula);
    return res.status(201).json(aluno);
    }

export async function atualizarAluno(req, res){
    const id = Number(req.params.id);
    const { nome, matricula } = req.body;
    const aluno = await alunosService.atualizar(id, nome, matricula);
    return res.status(200).json(aluno);
}

export async function deletarAluno(req, res){
    const id = Number(req.params.id);
    const aluno = await alunosService.deletar(id);
    return res.status(204).json(aluno);
}