import mongoose, { Schema, model as makeModel } from "mongoose";
// import ModelGeneric from "./ModelGeneric";
// import { Todo } from "../../types";

const toDoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pendente", "Em andamento", "Pronto"],
    default: "Pendente"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default class makeTodoDAO extends ModelGeneric<Todo> {
  constructor(model = mongoose.model("Todo", toDoSchema)) {
    super(model);
  }
};