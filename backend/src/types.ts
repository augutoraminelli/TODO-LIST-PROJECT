export type indexable = { // tipo para representar qualquer coisa que possa ser indexado no db
  id: number
}

export type Entity = indexable & { // qualquer coisa que possa ser cirada ou editada no db
  createdAt: Date
  updatedAt: Date
}

export type Todo = Entity & {
  content: string
  status: string
}

export type ResponseError = {
  error: unknown;
};