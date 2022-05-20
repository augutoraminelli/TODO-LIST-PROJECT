import chai from "chai";
import sinon from "sinon";
import chaiHttp from "chai-http";

import { Response, Request } from "express";

import TodosController from "../../../app/controllers/TodoController";
import Sinon from "sinon";

chai.use(chaiHttp);

const { expect } = chai;

describe("TodosController", () => {
  let todosController = new TodosController();

  const req = {} as Request
  const res = {} as Response

  const todoMock = {
    _id: "5e9f8f8f8f8f8f8f8f8f8f8",
    content: "Teste",
    status: "Pendente",
  };

  const arrTodo = [todoMock];

  describe("#create", () => {
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('return status 201 and todo created', async () => {
      sinon.stub(todosController.service, "create").returns(todoMock as any);
      await todosController.create(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(201)).to.be.eq(true);
    });

    it('return status 400 and error message', async () => {
      sinon.stub(todosController.service, "create").throws(new Error("Error"));
      await todosController.create(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(400)).to.be.eq(true);
    });
  });

  describe("#read", () => {
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('return status 200 and todos', async () => {
      sinon.stub(todosController.service, "read").returns(arrTodo as any);
      await todosController.read(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.eq(true);
    });

    it('return status 400 and error message', async () => {
      sinon.stub(todosController.service, "read").throws(new Error("Error"));
      await todosController.read(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(400)).to.be.eq(true);
    });
  });

  describe("#readOne", () => {
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('return status 200 and todo', async () => {
      sinon.stub(todosController.service, "readOne").returns(todoMock as any);
      await todosController.readOne(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.eq(true);
    });

    it('return status 404 and error message', async () => {
      sinon.stub(todosController.service, "readOne").throws(new Error("Error"));
      await todosController.readOne(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(404)).to.be.eq(true);
    });
  });

  describe("#update", () => {
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('return status 201 and todo updated', async () => {
      sinon.stub(todosController.service, "update").returns(todoMock as any);
      await todosController.update(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(201)).to.be.eq(true);
    });

    it('return status 400 and error message', async () => {
      sinon.stub(todosController.service, "update").throws(new Error("Error"));
      await todosController.update(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(400)).to.be.eq(true);
    });
  });

  describe("#delete", () => {
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('return status 200 and todo deleted', async () => {
      sinon.stub(todosController.service, "delete").returns(todoMock as any);
      await todosController.delete(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.eq(true);
    });

    it('return status 400 and error message', async () => {
      sinon.stub(todosController.service, "delete").throws(new Error("Error"));
      await todosController.delete(req, res);
      expect((res.status as Sinon.SinonStub).calledWith(400)).to.be.eq(true);
    });
  });
}); 
