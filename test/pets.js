const { expect } = require('chai');
const request = require('supertest');
const config = require('getconfig');
const app = require('../app');
const db = require('../db');

before(async () => {
  const { connection } = await db.connect(process.env.DB_URL || config.db.url);
  await connection.collections.pets.deleteMany();
});

after(() => {
  db.close();
});

describe('GET /pets', () => {
  it('Should find all the pets in database', (done) => {
    request(app)
      .get('/pets')
      .expect(200)
      .then((response) => {
        expect(response.body.pets).to.be.an('array');
        done();
      });
  });
});

describe('POST /pets', () => {
  it('Should create a new pet', (done) => {
    const pet = {
      name: 'Snoopy',
      type: 'dog',
      size: 'medium',
      color: 'white',
    };

    request(app)
      .post('/pets')
      .send(pet)
      .expect(201)
      .then((response) => {
        // TODO
        done();
      });
  });
});
