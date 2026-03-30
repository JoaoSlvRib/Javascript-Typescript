import { Router } from 'express';
import { usuariosController } from './usuarios.controller.js';

const routes = Router();

routes.post('/', usuariosController.create);

export default routes;