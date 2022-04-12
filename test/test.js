const request = require("supertest");
const server = require("../index");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
// describe('Books', () => {
//     beforeEach((done) => { //Before each test we empty the database
//         Book.remove({}, (err) => { 
//            done();           
//         });        
//     });
/*
  * Test the /GET route
  */
  describe('/GET data', () => {
      it('it should GET all the datas', (done) => {
        chai.request(server)
            .get('/tutorial')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

