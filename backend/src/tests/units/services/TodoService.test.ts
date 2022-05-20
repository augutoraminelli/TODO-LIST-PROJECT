import { expect } from 'chai';
import sinon from 'sinon';
import TodosService from '../../../app/services/TodoService';

describe('TodosService', () => {
  let todoService = new TodosService();

  const todoMock = {
    _id: '5e9f8f8f8f8f8f8f8f8f8f8',
    content: 'Teste',
    status: 'Pendente',
  };

  const arrTodo = [todoMock];

  describe('#create', () => {
    before(() => {
      sinon.stub(todoService.model, 'create').returns(todoMock as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should create a new todo', async () => {
      const result = await todoService.create(todoMock as any);
      expect(result).to.be.deep.equal(todoMock);
    });
  });

  describe('#read', () => {
    before(() => {
      sinon.stub(todoService.model, 'read').returns(arrTodo as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should read all todos', async () => {
      const result = await todoService.read();
      expect(result).to.be.deep.equal(arrTodo);
    });
  });

  describe('#readOne', () => {
    before(() => {
      sinon.stub(todoService.model, 'readOne').returns(todoMock as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should read one todo', async () => {
      const result = await todoService.readOne(todoMock._id);
      expect(result).to.be.deep.equal(todoMock);
    });

    it('when does not exist todo', async () => {
      const result = await todoService.readOne('5e9f8f8f8f8f8f8f8f8f8f8');
      expect(result).to.be.null;
    });
  });

  describe('#update', () => {

    const todoMockUpdate = {
      _id: '5e9f8f8f8f8f8f8f8f8f8f8',
      content: 'Teste',
      status: 'Pronto',
    };

    before(() => {
      sinon.stub(todoService.model, 'update').returns(todoMockUpdate as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should update a todo', async () => {
      const result = await todoService.update(todoMock._id, todoMockUpdate as any);
      expect(result).to.be.deep.equal(todoMockUpdate);
    });

    it('when does not exist todo', async () => {
      const result = await todoService.update('5e9f8f8f8f8f8f8f8f8f8f8', todoMockUpdate as any);
      expect(result).to.be.null;
    });
  });

  describe('#delete', () => {

    const todoMockDelete = {
      _id: '5e9f8f8f8f8f8f8f8f8f8f8',
      content: 'Teste',
      status: 'Pronto',
    };

    const arrTodo = [
      {
        _id: '5e9f8f8f8f8f8f8f8f8f8f8',
        content: 'Teste',
        status: 'Pronto',
      },
      {
        _id: '5e9f8f8f8f8f8f8f8f8f8f9',
        content: 'Teste',
        status: 'Pronto',
      },
    ];

    const newArrTodo = [
      {
        _id: '5e9f8f8f8f8f8f8f8f8f8f9',
        content: 'Teste',
        status: 'Pronto',
      },
    ];

    before(() => {
      sinon.stub(todoService.model, 'delete').returns(newArrTodo as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should delete a todo', async () => {
      const result = await todoService.delete(todoMockDelete._id);
      expect(result).to.be.deep.equal(todoMockDelete);
      expect(result).to.be.deep.equal(newArrTodo);
    });

    it('when does not exist todo', async () => {
      const result = await todoService.delete('5e9f8f8f8f8f8f8f8f8f8f8');
      expect(result).to.be.null;
    });
  });
});
