import { Router } from 'express';
const routes = Router();

import medicoRoutes from "./medico/medico.routes.js";
import pacienteRoutes from "./paciente/paciente.routes.js";
import consultaRoutes from "./consulta/consulta.routes.js";

routes.use("/medicos", medicoRoutes);
routes.use("/pacientes", pacienteRoutes);
routes.use("/consultas", consultaRoutes);

export default routes;