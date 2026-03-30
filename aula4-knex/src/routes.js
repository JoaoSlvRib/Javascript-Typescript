import { Router } from 'express';
import usuariosRoutes from './modules/usuarios/usuarios.routes.js';

const routes = Router();

routes.use('/usuarios', usuariosRoutes);

export default routes;