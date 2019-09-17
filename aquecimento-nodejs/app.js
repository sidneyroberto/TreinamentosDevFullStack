const express = require('express');
const mongoose = require('mongoose');

// Cria um novo app Express
const app = express();

/**
 * Importa o script de conexão
 * com o banco de dados para que 
 * ele seja executado quando o
 * app iniciar.
 */
require('./db');

/**
 * Quando este app for acessado,
 * ele irá devolver a frase 'Fala, negada!'
 */
app.get('/',
    // Isto é uma Arrow Function!
    (req, res) => res.send('Fala, negada!')
);

app.get('/boasvindas', (req, res) => res.send('Oi! Chega mais!'));

// Cria o modelo Contato
const esquema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: String
});
const Contato = mongoose.model('Contato', esquema);

// Serviço para listar todos os contatos
app.get('/contatos', async (req, res) => {
    let contatos = await Contato.find();
    return res.json(contatos);
});

const PORTA = 3001;
// Sobre o app na porta 3001
app.listen(PORTA, () => console.log('App inicializado'));