process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var db = require('../server/models')
var should = chai.should();

chai.use(chaiHttp);



describe('Todo Item', () => {
  beforeEach(function (done) {
    const newTodo = {
      title: 'Test todo'
    }
    const newItem = {
      content: 'Test item'
    }
    chai.request(app)
      .post('/api/todos')
      .send(newTodo).then(() => {
        chai.request(app)
          .post('/api/todos/1/items')
          .send(newItem).then(() =>
          done())
      })
  });
  afterEach((done) => {
    db.sequelize.sync({
      force: true
    }).then(() => {
      done()
    })
  })
  describe('API', () => {

    it('should add a new todo on /api/todos/:id/items POST', done => {
      chai.request(app)
        .post('/api/todos/1/items')
        .send({
          content: 'Test item'
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    it('should add a new todo on /api/todos/:id/items POST', done => {
      chai.request(app)
        .post('/api/todos/2/items')
        .send({
          content: 'Test item'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should update a todo on /api/todos/:id/items/1 PUT', done => {
      chai.request(app)
        .put('/api/todos/1/items/1')
        .send({
          content: 'Updated item',
          complete: true
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.content.should.equal('Updated item')
          res.body.complete.should.equal(true)
          done();
        });
    });
    it('should update a todo on /api/todos/:id/items/1 PUT', done => {
      chai.request(app)
        .put('/api/todos/1/items/2')
        .send({
          content: 'Updated item',
          complete: true
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.equal('Todo Item not found')
          done();
        });
    });
    it('should update a todo on /api/todos/:id/items/1 PUT', done => {
      chai.request(app)
        .put('/api/todos/1/items/x')
        .send({
          content: 'Updated item',
          complete: true
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should delete a todo on /api/todos/:id Delete', done => {
      chai.request(app)
        .delete('/api/todos/1/items/1')
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
    it('should delete a todo on /api/todos/:id Delete', done => {
      chai.request(app)
        .delete('/api/todos/1/items/2')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.equal('Todo Item not found')
          done();
        });
    });
    it('should delete a todo on /api/todos/:id Delete', done => {
      chai.request(app)
        .delete('/api/todos/1/items/x')
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});