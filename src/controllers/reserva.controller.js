import { conn } from "../db/connect.js";

const db = await conn();
let reserva = db.collection("Reserva");

const getReservasPendientesConDetalles = async (req, res) => {
    const pipeline = [
        { $match: { Estado: "Pendiente" } },
        { $lookup: { from: "Automovil", localField: "ID_Automovil", foreignField: "ID_Automovil", as: "fkAutomovil" } },
        { $unwind: "$fkAutomovil" },
        { $lookup: { from: "Cliente", localField: "ID_Cliente", foreignField: "ID_Cliente", as: "fkCliente" } },
        { $unwind: "$fkCliente" },
        { $project: { _id: 0 } }
    ];
    const result = await reserva.aggregate(pipeline).toArray();
    res.send(result);
};

const getReservaClienteDetails = async (req, res) => {
    const clienteId = parseInt(req.params.dni);
    const pipeline = [
        { $match: { Estado: "Pendiente", ID_Cliente: clienteId } },
        { $lookup: { from: "Cliente", localField: "ID_Cliente", foreignField: "ID_Cliente", as: "fk" } },
        { $unwind: "$fk" },
        { $project: { _id: 0, fk: 1 } }
    ];
    const result = await reserva.aggregate(pipeline).toArray();
    res.send(result);
};

export const reservaController = {
    getReservasPendientesConDetalles,
    getReservaClienteDetails
};
