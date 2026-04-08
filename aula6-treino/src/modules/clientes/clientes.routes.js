import { ClientesController } from "./clientes.controller";
import { Router } from "express";

const routes = Router();

routes.post('/', ClientesController.create);
routes.get('/', ClientesController.list);
routes.get('/:id', ClientesController.getById);
routes.put('/:id', ClientesController.update);
routes.delete('/:id', ClientesController.delete);

export default routes;