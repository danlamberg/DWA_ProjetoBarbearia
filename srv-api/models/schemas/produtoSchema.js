const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    codigo: Number,
    nome: {type: String, required: [true, "Nome é obrigatório!"]},
    descricao: String,
    preco: {
        type: Number,
        min: [0, "Preço não pode ser negativo!"],
        required: [true, "Preço é obrigatório!"]
    }
});

module.exports = produtoSchema;