import { Router } from 'express';
import { usuariosController } from './usuarios.controller.js';

const routes = Router();

routes.post('/', usuariosController.create);
routes.get('/', usuariosController.list);
routes.get('/:id', usuariosController.getById);
routes.put('/:id', usuariosController.update);
routes.patch('/:id', usuariosController.parcialUpdate);
routes.delete('/:id', usuariosController.delete);

export default routes;