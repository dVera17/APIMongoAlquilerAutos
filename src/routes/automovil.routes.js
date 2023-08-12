import { Router } from "express";
import { limiterGet } from "../limiter/limiter.js";
import { autoController } from "../controllers/automovil.controller.js";
const router = Router();

router.get('/disponibles', limiterGet(), autoController.getAutosDisponibles);
router.get('/capacidad', limiterGet(), autoController.getAutomovilesByCapacidad);
router.get('/ordenados', limiterGet(), autoController.getAutomovilesOrdered);
router.get('/capacidadydisponibilidad', limiterGet(), autoController.getCapacidadDisponibilidad);

export default router;