const mongoose = require(mongoose);

const clienteSchema = new mongoose.Schema({
    codigo: Number,
    nome: {
        type: String,
        require: true
    },
    sobrenome: String,
    cpf: String,
    fone: String,
    produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produto'}    
});

module.exports = clienteSchema;