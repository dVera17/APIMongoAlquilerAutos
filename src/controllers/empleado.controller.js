import { conn } from "../db/connect.js";

const db = await conn();
let empleado = db.collection("Empleado");

const getEmpleadosByCargo = async (req, res) => {
    const cargo = req.params.cargo;
    const result = await empleado.find({ Cargo: cargo }).toArray();
    res.send(result);
};

export const empleadoController = {
    getEmpleadosByCargo
};
