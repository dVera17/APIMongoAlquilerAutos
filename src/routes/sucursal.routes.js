import { Router } from "express";
import { limiterGet } from "../limiter/limiter.js";
import { sucursalController } from "../controllers/sucursal.controller.js";
const router = Router();

router.get('/autos_disponibles', limiterGet(), sucursalController.getCantidadAutosDisponibles);

export default router;