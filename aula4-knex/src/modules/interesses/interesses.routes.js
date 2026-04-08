import { Router } from 'express';
import { interessesController } from './interesses.controller.js';

const routes = Router();

routes.post('/', interessesController.create);
routes.get('/', interessesController.list);
routes.get('/:id', interessesController.getById);
routes.put('/:id', interessesController.update);
routes.delete('/:id', interessesController.delete);

export default routes;