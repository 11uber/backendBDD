const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    producto: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('producto', productoSchema);