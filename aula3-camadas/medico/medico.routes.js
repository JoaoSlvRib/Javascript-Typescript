import { Router } from 'express';
import * as medicoController from './medico.controller.js';
const router = Router();

router.get('/', medicoController.listarMedicos);
router.get('/:id', medicoController.visualizarMedico);
router.post('/', medicoController.criarMedico);
router.put('/:id', medicoController.atualizarMedico);
router.patch('/:id', medicoController.atualizarParcialMedico);
router.delete('/:id', medicoController.deletarMedico);

export default router;