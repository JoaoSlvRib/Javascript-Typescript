import routes from './routes.js';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
})