const express = require('express');
const router = express.Router();
const { Tarefa } = require('../models/tarefas');

router.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll({
            order: [['id', 'ASC']]
        });
        res.status(200).json(tarefas);
    }catch (error) {
        console.status(500).error('Erro ao listar tarefas: ', error);
    };
});

router.post('/', async (req, res) => {
    try {
        const { descricao } = req.body;
        const newTask = await Tarefa.create({ descricao });
        res.status(201).json(newTask);
    } catch (error) {
        console.status(500).error('Erro ao criar tarrefa: ', error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { descricao, checked } = req.body;

        const tarefa = await Tarefa.findByPk(req.params.id); 
        if (!(tarefa)) return res.status(500).send('Tarefa não encontrada!');

        // Atualizar os campos apenas se eles forem enviados
        if (descricao !== undefined) tarefa.descricao = descricao;
        if (checked !== undefined) tarefa.checked = checked;

        // Salvar a tarefa atualizada
        await tarefa.save();
        
        res.status(201).json(tarefa);
    } catch (error) {
        console.error('Erro ao atualizar tarefa: ', error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const tarefa = await Tarefa.findByPk(req.params.id);

        if (!(tarefa)) return res.send('Tarefa não encontrada!');

        await tarefa.destroy();

        res.status(201).json(tarefa);
    } catch(error) {
        console.status(500).error('Erro ao deletar tarefa: ', error);
    }
})

module.exports = router;