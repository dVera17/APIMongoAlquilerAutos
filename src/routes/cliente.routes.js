import { Router } from "express";
import { clienteController } from "../controllers/cliente.controller.js";
import verifyStructureMiddleware from "../middlewares/verifyStructure.js";
import validateDTODataMiddleware from "../middlewares/validateDTOData.js";
import { limiterGet, limiterPost } from "../limiter/limiter.js";
import { Cliente } from '../storage/Cliente.js';
const router = Router();

router.get('/', limiterGet(), verifyStructureMiddleware(Cliente), clienteController.getCustomers);
router.get('/:dni', limiterGet(), clienteController.getClienteByDNI);
router.get('/alquiler/minimo', limiterGet(), clienteController.getClienteMinimoAlquiler);
router.get('/reserva/:id_reserva', limiterGet(), clienteController.getClienteFromReserva);
router.post('/', limiterPost(), verifyStructureMiddleware(Cliente), validateDTODataMiddleware(Cliente), clienteController.addCliente);

export default router;