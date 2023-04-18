const express = require('express');
const router = express.Router();
const productoSchema = require("../models/producto");

// Crear producto
router.post('/productos', (req, res) => {
    const producto = productoSchema(req.body);

    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Obtener todos los productos
router.get('/productos', (req, res) => {
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Obtener un producto
router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    productoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Actualizar un producto
router.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio, categoria } = req.body;
    productoSchema
        .updateOne({ _id: id }, { $set: { nombre, precio, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Eliminar un producto
router.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productoSchema
        .findByIdAndRemove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;