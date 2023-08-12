import { Router } from "express";
import { limiterGet } from "../limiter/limiter.js";
import { empleadoController } from "../controllers/empleado.controller.js";
const router = Router();

router.get('/cargo/:cargo', limiterGet(), empleadoController.getEmpleadosByCargo);

export default router;