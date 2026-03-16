import { Router } from 'express';
import * as pacienteController from './paciente.controller.js';
const router = Router();

router.get('/', pacienteController.listarPacientes);
router.get('/:id', pacienteController.visualizarPaciente);
router.post('/', pacienteController.criarPaciente);
router.put('/:id', pacienteController.atualizarPaciente);
router.patch('/:id', pacienteController.atualizarParcialPaciente);
router.delete('/:id', pacienteController.deletarPaciente);

export default router;
