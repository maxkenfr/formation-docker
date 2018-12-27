const express = require('express');
const apiRoutes = express.Router();
const todoModel = require('./model');

apiRoutes.get('/', async (req, res)=>{
    let todos = await todoModel.find();
    res.json(todos);
});

apiRoutes.post('/', async (req, res)=>{
    let todo = await todoModel.create(req.body);
    res.json(todo);
});

apiRoutes.delete('/:todoId', async (req, res)=>{
    let todo = await todoModel.findById(req.params.todoId);
    let response = await todo.remove();
    res.json(response);
});

module.exports = apiRoutes;