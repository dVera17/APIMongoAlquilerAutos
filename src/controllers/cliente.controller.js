import { conn } from "../db/connect.js";
const db = await conn();
let cliente = db.collection("Cliente")
let reserva = db.collection("Reserva");

const getCustomers = async (req, res) => {
    let result = await cliente.find({}).toArray();
    res.send(result);
}

const getClienteByDNI = async (req, res) => {
    const dni = req.params.dni;
    const result = await cliente.find({ DNI: dni }).toArray();
    res.send(result);
};

const getClienteMinimoAlquiler = async (req, res) => {
    const pipeline = [
        { $lookup: { from: "Alquiler", localField: "ID_Cliente", foreignField: "ID_Cliente", as: "alquileres" } },
        { $match: { "alquileres.Estado": "Activo" } },
        { $project: { alquileres: 0 } }
    ];
    const result = await cliente.aggregate(pipeline).toArray();
    res.send(result);
};

const getClienteFromReserva = async (req, res) => {
    const idReserva = parseInt(req.params.id_reserva);
    const pipeline = [
        { $match: { ID_Reserva: idReserva } },
        { $lookup: { from: "Cliente", localField: "ID_Cliente", foreignField: "ID_Cliente", as: "clientes" } },
        { $unwind: "$clientes" },
        { $project: { _id: 0 } }
    ];
    const result = await reserva.aggregate(pipeline).toArray();
    res.send(result);
};

const addCliente = async (req, res) => {
    let databody = req.body;
    let dataArray = [databody.ID_Cliente, databody.Nombre, databody.Apellido, databody.DNI, databody.Direccion, databody.Telefono, databody.Email]
    const document = {
        ID_Cliente: dataArray[0],
        Nombre: dataArray[1],
        Apellido: dataArray[2],
        DNI: dataArray[3],
        Direccion: dataArray[4],
        Telefono: dataArray[5],
        Email: dataArray[6]
    };
    const result = await cliente.insertOne(document);
    console.log('Documento insertado con ID:', result.insertedId);
    res.send(result);
}

export const clienteController = {
    getCustomers,
    getClienteByDNI,
    getClienteMinimoAlquiler,
    getClienteFromReserva,
    addCliente
}
