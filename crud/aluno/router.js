import express from "express";
const router = express.Router();

import * as alunosController from "./controller.js";

router.get('/', alunosController.listarAluno);
router.get('/:id', alunosController.visualizarAluno);
router.post('/', alunosController.criarAluno);
router.put('/:id', alunosController.atualizarAluno);
router.delete('/:id', alunosController.deletarAluno);

export default router;