const request = require('supertest');
const app = require('../app');

describe('Express.js test', () => {
  test('should response to the GET method', done => {
    request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);

      done();
    });
  });
  
});
