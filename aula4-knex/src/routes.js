import { Router } from 'express';
import usuariosRoutes from './modules/usuarios/usuarios.routes.js';
import interessesRoutes from './modules/interesses/interesses.routes.js';

const routes = Router();

routes.use('/usuarios', usuariosRoutes);
routes.use('/interesses', interessesRoutes);

export default routes;