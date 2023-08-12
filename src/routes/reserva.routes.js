import { Router } from "express";
import { limiterGet } from "../limiter/limiter.js";
import { reservaController } from "../controllers/reserva.controller.js";
const router = Router();

router.get('/estado/pendiente', limiterGet(), reservaController.getReservasPendientesConDetalles);
router.get('/:dni', limiterGet(), reservaController.getReservaClienteDetails);

export default router;