const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('GET /version', () => {
  it('Should returns the api version', (done) => {
    request(app)
      .get('/version')
      .expect(200)
      .end((err, response) => {
        expect(response.body.version).to.be.equal(process.env.npm_package_version);
        done();
      });
  });
});
