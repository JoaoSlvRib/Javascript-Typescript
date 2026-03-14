import express from 'express';
import router from './aluno/router.js';

const app = express();
app.use(express.json());
app.use('/alunos', router);


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});