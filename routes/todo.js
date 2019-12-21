const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = require('../models/todo');

router.get('/', (req, res) => {
    Todo.find()
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});

router.get('/:id', ( req, res) => {
    const id = req.params.id;
    Todo.findById(id)
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});

router.post('/', (req, res) => {
    const todo = new Todo({
        _id: mongoose.Types.ObjectId(),
        todoName: req.body.todoName,
        isDone: false
    });

    todo.save().then(result => {
        res.status(201).json(result);
    })
    .catch(err => console.log(err));
});

router.patch('/:id', (req, res) => {
    const id = req.param.id;
    const newName = req.body.todoName
    const newIsDone = req.body.isDone
    Todo.update({_id: id}, {$set: {todoName: newName, isDone: newIsDone} })
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Todo.deleteOne({_id: id})
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
});

module.exports = router;