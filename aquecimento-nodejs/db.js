const mongoose = require('mongoose');

// Conecta no banco de dados
mongoose
    .connect(
        'mongodb://localhost/agenda-dev',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('Conectado no BD'))
    .catch(erro => console.log(erro));