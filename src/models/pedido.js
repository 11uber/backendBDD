const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
    id_pedido: {
        type: Number,
        required: true,
    },
    id_cliente: {
        type: Number,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    estatus: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('pedido', pedidoSchema);