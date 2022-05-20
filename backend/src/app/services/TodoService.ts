import { Todo } from "../../types";
import makeTodoDAO from "../models/todoDao";
import ServiceGeneric from "./ServiceGeneric";

export default class TodosService extends ServiceGeneric<Todo> {
  constructor() {
    super(new makeTodoDAO);
  }
}
