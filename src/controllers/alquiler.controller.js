import { conn } from "../db/connect.js";
const db = await conn();
let alquiler = db.collection("Alquiler")

const getAlquilerActivo = async (req, res) => {
    const pipeline = [
        { $match: { Estado: "Activo" } },
        { $lookup: { from: "Cliente", localField: "ID_Cliente", foreignField: "ID_Cliente", as: "fk" } },
        { $unwind: "$fk" },
        { $project: { _id: 0 } }
    ];
    const result = await alquiler.aggregate(pipeline).toArray();
    res.send(result);
}

const getAlquilerById = async (req, res) => {
    const alquilerId = parseInt(req.params.id);
    const result = await alquiler.findOne({ ID_Alquiler: alquilerId });
    result ? res.send(result) : res.status(404).send({ status: 404, message: "Alquiler no encontrado" });
}

const getAlquilerCostoTotalById = async (req, res) => {
    const alquilerId = parseInt(req.params.id);
    const pipeline = [
        { $match: { ID_Alquiler: alquilerId } },
        { $project: { _id: 0, Costo_Total: 1 } }
    ];
    const result = await alquiler.aggregate(pipeline).toArray();
    res.send(result);
};

const getAlquileresFechaInicio = async (req, res) => {
    const result = await alquiler.find({ Fecha_Inicio: "2023-07-05" }).toArray();
    res.send(result);
};

const getAllAlquileres = async (req, res) => {
    const result = await alquiler.find({}).toArray();
    res.send(result);
}

const getAlquilerEntreFechas = async (req, res) => {
    const startDate = "2023-07-05";
    const endDate = "2023-07-10";
    const pipeline = [
        { $match: { Fecha_Inicio: { $gte: startDate, $lte: endDate } } },
        { $project: { _id: 0 } }
    ];
    const result = await alquiler.aggregate(pipeline).toArray();
    res.send(result);
};

export const alquilerController = {
    getAlquilerActivo,
    getAlquilerById,
    getAlquilerCostoTotalById,
    getAlquileresFechaInicio,
    getAllAlquileres,
    getAlquilerEntreFechas
}