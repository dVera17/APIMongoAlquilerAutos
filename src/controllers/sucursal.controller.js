import { conn } from "../db/connect.js";

const db = await conn();
let sucursal = db.collection("Sucursal");

const getCantidadAutosDisponibles = async (req, res) => {
    const pipeline = [
        { $lookup: { from: "Sucursal_Automovil", localField: "ID_Sucursal", foreignField: "ID_Sucursal", as: "automoviles" } },
        { $project: { _id: 0, ID_Sucursal: 1, Nombre: 1, Direccion: 1, Telefono: 1, "automoviles.Cantidad_Disponible": 1 } }
    ];
    const result = await sucursal.aggregate(pipeline).toArray();
    res.send(result);
};

export const sucursalController = {
    getCantidadAutosDisponibles
};
