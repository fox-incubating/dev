import request from 'supertest'
import httpStatus from 'http-status'
import app from '../../commands/app.js'
import config from '../../commands/config/config.js'

describe('Auth routes', () => {
	describe('GET /v1/docs', () => {
		test('should return 404 when running in production', async () => {
			config.env = 'production'
			await request(app).get('/v1/docs').send().expect(httpStatus.NOT_FOUND)
			config.env = process.env.NODE_ENV
		})
	})
})
