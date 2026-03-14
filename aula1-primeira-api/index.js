import express from 'express';
const app = express();

app.use(express.json());

let alunos = [];
let idAluno = 1;
let disciplinas = [];
let idDisciplina = 1;

app.post('/alunos', (req, res) => {
    alunos.push({
        "id": idAluno++,
        "nome": req.body.nome,
        "matricula": req.body.matricula,
        "disciplinas": req.body.disciplinas
    });
    res.status(201).json(alunos[alunos.length-1]);
});

app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
});

app.get('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find((valor) => valor.id === id);

    if (!aluno) {
        return res.status(404).json({ "message": "Aluno não foi encontrado, tente novamente" });
    }
    res.status(200).json(aluno);
});

app.put('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);

    const aluno = alunos.find((valor) => valor.id === id);

    if (aluno) {
    aluno.nome = req.body.nome;
    aluno.matricula = req.body.matricula;
    aluno.disciplinas = req.body.disciplinas;
    } else {
        return res.status(404).json({ "message": "Aluno não encontrado" });
    }
    
    res.status(200).json(aluno);    
});

app.patch('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);

    const aluno = alunos.find((valor) => valor.id === id);

if(aluno) {
    if (req.body.nome) {
        aluno.nome = req.body.nome;
    }
    if (req.body.matricula) {
        aluno.matricula = req.body.matricula;
    }  
    if (req.body.disciplinas) {
        aluno.disciplinas = req.body.disciplinas;
    }
} else {
    return res.status(404).json({ "message": "Aluno não encontrado" });
}

    res.status(200).json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    let novos_alunos = alunos.filter((aluno) => aluno.id !== id);
    alunos = novos_alunos;
    res.status(204).json();
});

app.post('/disciplinas', (req, res) => {
    disciplinas.push({
        "id": idDisciplina++,
        "nome": req.body.nome,
        "descricao": req.body.descricao
    });
    res.status(201).json(disciplinas[disciplinas.length-1]);
});

app.get('/disciplinas', (req, res) => {
    res.status(200).json(disciplinas);
});

app.get('/disciplinas/:id', (req, res) => {
    const id = Number(req.params.id);
    const disciplina = disciplinas.find((valor) => valor.id === id);

    if (!disciplina) {
        return res.status(404).json({ "message": "Disciplina não foi encontrada, tente novamente" });
    }
    res.status(200).json(disciplina);
});

app.put('/disciplinas/:id', (req, res) => {
    const id = Number(req.params.id);

    const disciplina = disciplinas.find((valor) => valor.id === id);

    if (disciplina) {
    disciplina.nome = req.body.nome;
    disciplina.descricao = req.body.descricao;
    } else {
        return res.status(404).json({ "message": "Disciplina não encontrada" });
    }
    
    res.status(200).json(disciplina);    
});

app.patch('/disciplinas/:id', (req, res) => {
    const id = Number(req.params.id);

    const disciplina = disciplinas.find((valor) => valor.id === id);

if(disciplina) {
    if (req.body.nome) {
        disciplina.nome = req.body.nome;
    }
    if (req.body.descricao) {
        disciplina.descricao = req.body.descricao;
    }  
} else {
    return res.status(404).json({ "message": "Disciplina não encontrada" });
}

    res.status(200).json(disciplina);
});

app.delete('/disciplinas/:id', (req, res) => {
    const id = Number(req.params.id);
    let novas_disciplinas = disciplinas.filter((disciplina) => disciplina.id !== id);
    disciplinas = novas_disciplinas;
    res.status(204).send();
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


