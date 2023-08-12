import { conn } from "../db/connect.js";
const db = await conn();
let alquiler = db.collection("Alquiler");
let automovil = db.collection("Automovil");

const getAutosDisponibles = async (req, res) => {
    const pipeline = [
        { $match: { Estado: "Disponible" } },
        { $lookup: { from: "Automovil", localField: "ID_Automovil", foreignField: "ID_Automovil", as: "fk" } },
        { $unwind: "$fk" },
        { $replaceRoot: { newRoot: "$fk" } },
        { $project: { _id: 0 } }
    ];
    const result = await alquiler.aggregate(pipeline).toArray();
    res.send(result);
}

const getAutomovilesByCapacidad = async (req, res) => {
    const result = await automovil.find({ Capacidad: { $gt: 5 } }).toArray();
    res.send(result);
};

const getAutomovilesOrdered = async (req, res) => {
    const pipeline = [{ $sort: { Marca: 1, Modelo: 1 } }];
    const result = await automovil.aggregate(pipeline).toArray();
    res.send(result);
};

const getCapacidadDisponibilidad = async (req, res) => {
    const pipeline = [
        { $match: { Capacidad: 5 } },
        { $lookup: { from: "Alquiler", localField: "ID_Automovil", foreignField: "ID_Automovil", as: "alquileres" } }, { $unwind: "$alquileres" },
        { $match: { "alquileres.Estado": "Disponible" } },
        { $project: { _id: 0 } }
    ];
    const result = await automovil.aggregate(pipeline).toArray();
    res.send(result);
};

export const autoController = {
    getAutosDisponibles,
    getAutomovilesByCapacidad,
    getAutomovilesOrdered,
    getCapacidadDisponibilidad
}