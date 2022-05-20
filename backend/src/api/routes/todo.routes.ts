import { Router } from 'express';
import App from '../../app';
import TodosController from '../../app/controllers/TodoController';

const server = new App();

const todoRoute = Router()

const todosController = new TodosController();

//getTodo
todoRoute.get('/todo/:id', todosController.readOne);

// editTodo
todoRoute.put('/todo/:id', todosController.update);

// deleteTodo
todoRoute.delete('/todo/:id', todosController.delete);

// createTodo
todoRoute.post('/todo', todosController.create);

//listTodos
todoRoute.get('/todo', todosController.read);

server.addRouter(todoRoute);

export { todoRoute, server };