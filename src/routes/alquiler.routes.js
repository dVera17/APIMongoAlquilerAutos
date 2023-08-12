import { Router } from "express";
import { limiterGet } from "../limiter/limiter.js";
import { alquilerController } from "../controllers/alquiler.controller.js";
const router = Router();

router.get('/estado/activo', limiterGet(), alquilerController.getAlquilerActivo);
router.get('/:id', limiterGet(), alquilerController.getAlquilerById);
router.get('/costo_total/:id', limiterGet(), alquilerController.getAlquilerCostoTotalById);
router.get('/fecha/inicio', limiterGet(), alquilerController.getAlquileresFechaInicio);
router.get('/', limiterGet(), alquilerController.getAllAlquileres);
router.get('/fecha/rango', limiterGet(), alquilerController.getAlquilerEntreFechas);

export default router;