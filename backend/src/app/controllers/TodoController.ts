import { Request, Response } from 'express';
import { ResponseError, Todo } from '../../types';
import TodosService from '../services/TodoService';

export default class TodosController {
  constructor(public service = new TodosService()) { }

  public read = async (_req: Request, res: Response<Todo[] | ResponseError>)
    : Promise<typeof res> => {
    const todosList = await this.service.read();

    if (!todosList) {
      return res.status(404).json({
        error: 'Nenhum todo encontrado'
      });
    }
    return res.status(200).json(todosList);
  }

  public readOne = async (req: Request, res: Response<Todo | ResponseError>)
    : Promise<typeof res> => {
    const todo = await this.service.readOne(req.params.id);

    if (!todo) {
      return res.status(404).json({
        error: 'Todo não encontrado'
      });
    }
    return res.status(200).json(todo);
  }

  public create = async (req: Request, res: Response<Todo | ResponseError>)
    : Promise<typeof res> => {
    const todo = await this.service.create(req.body);

    if (!todo) {
      return res.status(400).json({
        error: 'Todo inválido'
      });
    }
    return res.status(201).json(todo);
  }

  public update = async (req: Request, res: Response<Todo | ResponseError>)
    : Promise<typeof res> => {
    console.log(req.params.id, req.body);
    
    const todo = await this.service.update(req.params.id, req.body);

    if (!todo) {
      return res.status(400).json({
        error: 'Todo inválido'
      });
    }
    return res.status(201).json(todo);
  }

  public delete = async (req: Request, res: Response<Todo | ResponseError>)
    : Promise<typeof res> => { 
    const { id } = req.params;

    const todo = await this.service.delete(id);
    
    if (!todo) {
      return res.status(400).json({
        error: 'Todo inválido'
      });
    }
    return res.status(200).json(todo);
  }
};
