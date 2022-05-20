import { Model as M, StringSchemaDefinition } from 'mongoose';

abstract class ModelGeneric<T> {
  constructor(public model: M<T>) { }

  async create(data: T): Promise<T> {
    const response = await this.model.create(data);
    return response;
  }

  async read(): Promise<T[]> {
    const response = await this.model.find();
    return response;
  }

  async readOne(id: string): Promise<T | null> {
    const response = await this.model.findOne({ _id: id });
    return response;
  }

  async update(id: string, data: T): Promise<T | null> {
    const response = await this.model.findByIdAndUpdate({ _id: id }, data);
    return response;
  }

  async delete(id: string): Promise<T | null> {
    const response = await this.model.findByIdAndDelete({ _id: id });
    return response;
  }
}

export default ModelGeneric;