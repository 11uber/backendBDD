const express = require("express");
const router = express.Router();
const pedidoSchema = require("../models/pedido");

// Crear pedido
router.post('/pedidos', (req, res) => {
    const pedido = pedidoSchema(req.body);

    pedido
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Obtener todos los pedidos
router.get('/pedidos', (req, res) => {
    pedidoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Obtener un pedido
router.get('/pedidos/:id', (req, res) => {
    const { id } = req.params;
    pedidoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Actualizar un pedido
router.put('/pedidos/:id', (req, res) => {
    const { id } = req.params;
    const { estatus } = req.body;
    pedidoSchema
        .updateOne({ _id: id }, { $set: { estatus } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Eliminar un pedido
router.delete('/pedidos/:id', (req, res) => {
    const { id } = req.params;
    pedidoSchema
        .findByIdAndRemove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;