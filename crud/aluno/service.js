import { arrayAlunos } from './repository.js'

export async function listar(req, res){
    return arrayAlunos;
}

export async function visualizar(req, res){
    const id = Number(req.params.id);
    const aluno = arrayAlunos.find(a => a.id === id);
    return aluno;
}

export async function criar(req, res){
    const { nome, matricula } = req.body;
    const id = arrayAlunos.length +1;
    const novoAluno = { id, nome, matricula };
    arrayAlunos.push(novoAluno);
    return novoAluno;
}

export async function atualizar(req, res){
    const id = Number(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    return aluno;
}

export async function deletar(req, res){
    const id = Number(req.params.id);
    const novoAlunos = alunos.filter(a => a.id !== id);
    arrayAlunos = novoAlunos;
    return;
}