const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    todoName: String,
    isDone: Boolean,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Todo', todoSchema);