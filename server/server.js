const express = require('express');
const app = express();
const PORT = 10000;
const tarefas = require('../routes/tarefas');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

app.use('/v1/tarefas', tarefas);

app.listen(PORT, () => {
    console.log('Servidor rodando em: http://localhost:' + PORT);
});

module.exports = {app};