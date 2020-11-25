// @ts-check

const { https } = require('firebase-functions')
const { default: next } = require('next')

const isDev = process.env.NODE_ENV !== 'production'

const server = next({
	dev: isDev,
	conf: { distDir: './src/next/.next' }
})

const nextjsHandle = server.getRequestHandler()

exports.nextServer = https.onRequest(async (req, res) => {
	await server.prepare()

	return nextjsHandle(req, res)
})
