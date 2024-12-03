const express = require('express');
const router = express.Router();
const { Tarefa } = require('../models/tarefas');

router.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll({});
        res.json(tarefas);
    }catch (error) {
        console.error('Erro ao listar tarefas: ', error);
    };
});

router.post('/', async (req, res) => {
    try {
        const { descricao } = req.body;
        const newTask = await Tarefa.create({ descricao, status });
        res.json(newTask);
    } catch (error) {
        console.error('Erro ao criar tarrefa: ', error);
    }
});

module.exports = router;