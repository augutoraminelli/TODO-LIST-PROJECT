import ModelGeneric from '../models/ModelGeneric';

export default class ServiceGeneric<T> {
  constructor(public model: ModelGeneric<T>) { }

  async create(data: T): Promise<T> {
    const response = await this.model.create(data);
    return response;
  }

  async read(): Promise<T[]> {
    const response = await this.model.read();
    return response;
  }

  async readOne(id: string): Promise<T | null> {
    const response = await this.model.readOne(id);
    return response;
  }

  async update(id: string, data: T): Promise<T | null> {
    const response = await this.model.update(id, data);
    return response;
  }

  async delete(id: string): Promise<T | null> {
    const response = await this.model.delete(id);
    return response;
  }
}
