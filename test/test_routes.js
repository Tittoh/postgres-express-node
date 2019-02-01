process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);

const newTodo = {
  title: 'Test todo'
}

describe('Todo API', () => {
  it('should show default welcome message', done => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.equal('Welcome to the beginning of nothingness')
        done();
      });
  });
  it('should show api welcome message', done => {
    chai.request(app)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.equal('Welcome to the Todo API!')
        done();
      });
  });
  it('should add a new todo on /api/todos POST', done => {
    chai.request(app)
      .post('/api/todos')
      .send({
        title: 'Test title',
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('should get all todos on /api/todos GET', done => {
    chai.request(app)
      .get('/api/todos')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should get one todo on /api/todos GET', done => {
    chai.request(app)
      .get('/api/todos/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});