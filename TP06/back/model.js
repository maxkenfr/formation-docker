const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    content : {type:String, default:''}
}, {timestamps: true});

const todoModel = mongoose.model('Todo',todoSchema);

module.exports = todoModel;