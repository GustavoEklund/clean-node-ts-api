import request from 'supertest'
import app from '../config/app'

describe('SignUp routes', () => {
  test('Should return an account onn success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Gustavo',
        email: 'gustavo04616@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
