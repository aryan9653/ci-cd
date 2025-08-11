const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
    it('should return hello message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message', 'Hello from CI/CD Pipeline!');
    });
});
