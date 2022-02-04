//imports
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const PORT = process.env.PORT || 3200;

//routes api
app.use(express.json());
app.get('/todos', todoController.getAllTodo);
app.post('/todos', todoController.addTodo);
app.patch('/todos/:todoId', todoController.updateTodoById);
app.delete('/todos/:todoId', todoController.deleteTodoById);
app.get('/todos/:todoId', todoController.getTodoById);

//listener
app.listen(PORT, function(){
    console.log('Server has started to run');
    mongoose.connect(process.env.LOCAL_DB)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function(error){
        console.log('Error connecting to Mongo DB', error.message);
    })
});