import * as fs from 'node:fs'

import config from '../config/config.js'

const packageJson = JSON.parse(await fs.promises.readFile('../../package.json', 'utf8'))
const version = packageJson.version

const swaggerDef = {
	openapi: '3.0.0',
	info: {
		title: 'node-express-boilerplate API documentation',
		version,
		license: {
			name: 'MIT',
			url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
		},
	},
	servers: [
		{
			url: `http://localhost:${config.port}/v1`,
		},
	],
}

export default swaggerDef
