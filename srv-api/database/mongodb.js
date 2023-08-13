const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/meu_banco';

const db = mongoose.connect(URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const con = mongoose.connect;

con.on ('error', function(){
    console.log('Conectado ao MongoDB!');
});

con.on('error', function(){
    console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function(){
    console.log('Desconectado do MongoDB!');
});

module.exports = db;
