export async function listarAluno(req, res){
    const alunos = await alunosService.listar();
    return res.status(200).json(alunos);
}

export async function visualizarAluno(req, res){
    const alunos = await alunosService.visualizar();
    return res.status(200).json(alunos); 
}

export async function criarAluno(req, res){
    const alunos = await alunosService.criar();
    return res.status(201).json(alunos);
    }

export async function atualizarAluno(req, res){
    const alunos = await alunosService.atualizar();
    return res.status(200).json(alunos);
}

export async function deletarAluno(req, res){
    const alunos = await alunosService.deletar();
    return res.status(204).json(alunos);
}
