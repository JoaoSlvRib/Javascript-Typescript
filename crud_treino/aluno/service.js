import { arrayAlunos } from './repository.js'

export function listar(){
    return arrayAlunos;
}

export function visualizar(id){
    const aluno = arrayAlunos.find(a => a.id === id);
    return aluno;
}

export async function criar(nome, matricula){
    const novoAluno = {
        id: arrayAlunos.length +1,
        nome,
        matricula
    }
    arrayAlunos.push(novoAluno);
    return novoAluno;
}

export async function atualizar(id, nome, matricula){
    const aluno = arrayAlunos.find(a => a.id === id);
    if(aluno){
        aluno.nome = nome;
        aluno.matricula = matricula;
    }
    return aluno;
}

export async function deletar(id){
    const i = arrayAlunos.findIndex(a => a.id === id);
    if(i !== -1){
        arrayAlunos.splice(i, 1);
    }
    return;
}