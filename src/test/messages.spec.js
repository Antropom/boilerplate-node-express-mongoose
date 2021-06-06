const request = require('supertest')
const app = require('../app')

describe('Test routes', () => {
  it('GET / sends 404', () => {
    return request(app).get('/').expect(404)
  })

  it('GET /messages sends 200', () => {
    return request(app).get('/messages').expect(200)
  })

  it('GET /messages/:id sends 200', () => {
    return request(app)
      .get('/messages/602138c053b4f319d8ae718c')
      .expect(200, {
        message: 'Success',
        result: {
          _id: '602138c053b4f319d8ae718c',
          message: 'Hello World',
          optional: null,
          __v: 0,
        },
      })
  })
})
