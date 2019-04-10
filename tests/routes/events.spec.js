import request from 'supertest';
import app from '../../server';

describe('GET /events', () => {
    it('responds with json', (done) => {
        request(app)
            .get('/api/events')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /api/events/cocktail', () => {
    it('responds with json', (done) => {
        request(app)
            .get('/api/events/cocktail')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /api/events/cocktail/release', () => {
    it('responds with error 422', (done) => {
        request(app)
            .post('/api/events/cocktail/release')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
    });
    it('responds with json', (done) => {
        request(app)
            .post('/api/events/cocktail/release')
            .send({tickets: [], url: ''})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /api/events/cocktail/checkout', () => {
    it('responds with error 422', (done) => {
        request(app)
            .post('/api/events/cocktail/checkout')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
    });
    it('responds with json', (done) => {
        request(app)
            .post('/api/events/cocktail/checkout')
            .send({tickets: []})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
