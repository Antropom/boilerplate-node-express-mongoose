const request = require('supertest')
const app = require('../app')

describe('Test routes', () => {
  it('GET /messages sends 200', () => {
    return request(app).get('/messages').expect(200)
  })
})
