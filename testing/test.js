const assert = require('chai').assert;
const expect = require('chai').expect;
// const uuid = require('uuid/v1');
const app = require('../server/index.js');
const supertest = require('supertest');
const db = require('../database/index.js');
const moment = require('moment');
const fakeData = require('../fakeData/*');

const request = supertest.agent(app.listen());

describe('server', function() {
  // it('should respond with a greeting when the index page is visited', (done) => {
  //   request
  //     .get('/')
  //     .expect(200)
  //     .end((err, res) => {
  //       assert.equal(res.body.data, 'Hello Koa!');
  //       done();
  //     });
  // }); 

  // it('should have a route called /requests to take requests from the Passengers API', function(done) {
  //   let timestamp = new Date(new Date() - (Math.random() * 8.64e7)).toISOString().split('.')[0]+"-0800";
  //   let data = {
  //     id: uuid(),
  //     rate: 2.65, 
  //     zipOrigin: 94105,
  //     zipDestination: 94122,
  //     timestamp: timestamp,
  //     // hourBucket: moment(timestamp).format('MMMM Do YYYY h a'),
  //     // minuteBucket: moment(timestamp).format('MMMM Do YYYY h:mm a'),
  //     price: 6.85,
  //     ride: false
  //   };

  //   request
  //     .post('/requests')
  //     .send(data)
  //     .end((err, res) => {
  //       done();
  //     });  
  // });

  it('should return fare price when request/fare endpoint is called', function(done) {
    request
      .get('/request/fare')
      .expect(200)
      .end((err, res) => {
        assert.lengthOf(res.body.data, 1, 'there should be exactly one value returned');
        assert.typeOf(res.body.data[0], 'number', 'the returned value should be a number')
        done();
      });
  });
   it('should get data from event and driver services', function(done) {
    //not sure how to do this but it should test the updateSurgeData function
  });
  it('should return the most recently added data', function(done) {
    request
      .get('/request/fare')
      .expect(200)
      .end((err, res) => {
        assert.lengthOf(res.body.data, 27, 'there should be 27 items');
        // assert.typeOf(res.body.data[0], 'number')
        done();
      });
  });
});

// describe('fake data generator', function() {
//   it('should return an array with 6 properties', function(done) {
//     assert.equal(fakeDataGenerator().length, 6);
//     done();
//   });
// });  