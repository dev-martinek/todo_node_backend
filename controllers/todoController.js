const Todo = require('../models/Todo');


async function addTodo(request, response) {
 try {
    const newTodo = await Todo.create(request.body);
    response.status(200).json(newTodo);
    response.status(401).json({message: 'cant add data'});
 }catch (error) {
    console.log("can't add data: ", error.message);
    response.status(401).json({error: error.message});
 }

}

async function deleteTodoById(request, response) {
    const todoId = request.params.todoId;
    try {
        await Todo.findByIdAndDelete(todoId);
        response.status(200).json({message: 'Todo has been deleted'})
    } catch (error) {
        console.log("cant delete: ", error.message);
        response.status(401).json({error: error.message});
    }

}
async function updateTodoById(request, response) {
    const todoId = request.params.todoId;
    const body = request.body;
    try {
       await Todo.findByIdAndUpdate(todoId, body);
        response.status(200).json({message: 'Todo is updated'});
    } catch (error) {
        console.log('Cant update : ', error.message);
        response.status(401).json({error: error.message});
    }

}

async function getTodoById(request, response) {
    try {
        const todo = await Todo.findById(request.params.todoId);
        response.status(200).json(todo);
    } catch (error) {
        console.log('cant get todo: ', error.message);
        response.status(401).json({error: error.message});
    }
}

async function getAllTodo(request, response) {
    try{
        const todos = await Todo.find({});
        response.status(200).json(todos);
    } catch(error){
        console.log('cant get data: ', error.message);
        response.status(401).json({error: error.message});
    }

}

module.exports = {
    getAllTodo,
    deleteTodoById,
    updateTodoById,
    addTodo,
    getTodoById
}