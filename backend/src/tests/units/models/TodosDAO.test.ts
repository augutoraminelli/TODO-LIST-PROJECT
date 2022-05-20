import { expect } from 'chai';
import sinon from 'sinon';
import makeTodoDAO from '../../../app/models/todoDao';

describe('TodoDAO', () => {
  let todoDao = new makeTodoDAO();

  const todoMock = {
    _id: '5e9f8f8f8f8f8f8f8f8f8f8',
    content: 'Teste',
    status: 'Pendente',
  };

  const arrTodo = [todoMock];

  describe('#create', () => {
    before(() => {
      sinon.stub(todoDao.model, 'create').returns(todoMock as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should create a new todo', async () => {
      const result = await todoDao.create(todoMock as any);
      expect(result).to.be.deep.equal(todoMock);
    });
  });

  describe('#read', () => {
    before(() => {
      sinon.stub(todoDao.model, 'find').returns(arrTodo as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should read all todos', async () => {
      const result = await todoDao.read();
      expect(result).to.be.deep.equal(arrTodo);
    });
  });

  describe('#readOne', () => {
    before(() => {
      sinon.stub(todoDao.model, 'findOne').returns(todoMock as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should read one todo', async () => {
      const result = await todoDao.readOne(todoMock._id);
      expect(result).to.be.deep.equal(todoMock);
    });

    it('when does not exist todo', async () => {
      const result = await todoDao.readOne('5e9f8f8f8f8f8f8f8f8f8f8');
      expect(result).to.be.null;
    });
  });

  describe('#update', () => {

    const updateMock = {
      _id: '5e9f8f8f8f8f8f8f8f8f8f8',
      content: 'Teste',
      status: 'Pronto',
    };

    before(() => {
      sinon.stub(todoDao.model, 'findOneAndUpdate').returns(updateMock as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should update one todo', async () => {
      const result = await todoDao.update(todoMock._id, updateMock as any);
      expect(result).to.be.deep.equal(updateMock);
    });

    it('when does not exist todo', async () => {
      const result = await todoDao.update('5e9f8f8f8f8f8f8f8f8f8f', updateMock as any);
      expect(result).to.be.deep.equal(null);
    });
  });

  describe('#delete', () => {

    const arrTodos = [
      {
        _id: '5e9f8f8f8f8f8f8f8f8f8f8',
        content: 'Teste',
        status: 'Pendente',
      },
      {
        _id: '5e9f8f8f8f8f8f8f8f8f8f9',
        content: 'Teste',
        status: 'Pendente',
      },
    ];

    const newArrTodos = [
      {
        _id: '5e9f8f8f8f8f8f8f8f8f8f8',
        content: 'Teste',
        status: 'Pendente',
      },
    ];

    before(() => {
      sinon.stub(todoDao.model, 'findOneAndDelete').returns(newArrTodos as any);
    })

    after(() => {
      sinon.restore();
    })

    it('should delete one todo', async () => {
      const result = await todoDao.delete(todoMock._id);
      expect(result).to.be.deep.equal(newArrTodos);
    });

    it('when does not exist todo', async () => {
      const result = await todoDao.delete('5e9f8f8f8f8f8f8f8f8f8f8');
      expect(result).to.be.deep.equal(null);
    });
  });
});
