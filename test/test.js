const request = require("supertest");
const app = require("../index");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let assert = chai.assert;


chai.use(chaiHttp);
  describe('/GET datas', () => {
      it('it should GET all the datas', (done) => {
        request(app)
            .get('/tutorial')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect(200)        
            .end((_err, res) => {
              assert.equal(res.status, 200);
          done();
            });
      });
  });

const successKeys = [
  'title',
  'description',
  'published'
]

describe('/GET data by Id', () => {
      it('it should GET data by id', (done) => {
        request(app)
        .get('/tutorial/1650355185078')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .expect(200)        
        .end((_err, res) => {
          assert.equal(res.status, 200);
          assert.containsAllKeys(res.body, successKeys);
        done();
        });
    });
  });

describe('/POST data', () => {
  it('it should add a data', (done) => {
    let book = {
      title: "The Lord of the Rings",
      description: "J.R.R. Tolkien",
      published: true
  }
    chai.request(app)
        .post('/tutorial')
        .send(book)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
        done();
        });
  });
});

describe('/PUT data', () => {
  it('it should update data ', (done) => {
    chai.request(app)
        .put('/tutorial')
        .end((_err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});

describe('/DELETE data', () => {
  it('it should delete data', (done) => {
    chai.request(app)
        .delete('/tutorial/1650355185078')
        .end((_err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});


