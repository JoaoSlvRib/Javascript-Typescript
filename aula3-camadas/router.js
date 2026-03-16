import { Router } from 'express';
const router = Router();

import medicoRoutes from "./medico/medico.routes.js";
import pacienteRoutes from "./paciente/paciente.routes.js";
import consultaRoutes from "./consulta/consulta.routes.js";

app.use("/medicos", medicoRoutes);
app.use("/pacientes", pacienteRoutes);
app.use("/consultas", consultaRoutes);

export default router;