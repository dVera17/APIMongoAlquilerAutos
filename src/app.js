import express from 'express';
import { config } from "dotenv";
import routerJWT from './routes/JWT.routes.js';
import verifyToken from './middlewares/JWT/authToken.js';
import routerCliente from './routes/cliente.routes.js';
import routerAutomovil from './routes/automovil.routes.js';
import routerAlquiler from './routes/alquiler.routes.js';
import routerReserva from './routes/reserva.routes.js';
import routerEmpleado from './routes/empleado.routes.js';
import routerSucursal from './routes/sucursal.routes.js';

config();
const app = express();
app.set('port', process.env.PORT_SERVER);
app.use(express.json());

app.use('/token', routerJWT);
app.use('/api/cliente', verifyToken, routerCliente);
app.use('/api/automovil', verifyToken, routerAutomovil);
app.use('/api/alquiler', verifyToken, routerAlquiler);
app.use('/api/reserva', verifyToken, routerReserva);
app.use('/api/empleado', verifyToken, routerEmpleado);
app.use('/api/sucursal', verifyToken, routerSucursal);

export default app;