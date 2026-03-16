import { Router } from 'express';
import * as consultaController from './consulta.controller.js';
const router = Router();

router.get('/', consultaController.listarConsultas);
router.get('/:id', consultaController.visualizarConsulta);
router.post('/', consultaController.criarConsulta);
router.put('/:id', consultaController.atualizarConsulta);
router.patch('/:id', consultaController.atualizarParcialConsulta);
router.delete('/:id', consultaController.deletarConsulta);

export default router;