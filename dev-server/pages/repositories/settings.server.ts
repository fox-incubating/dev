import { renderPage } from '../../server.ts'
import {
	addRepoDestination,
	getRepoDestinations,
	removeRepoDestination,
} from '#pages/repositories/settings.util.ts'
import {
	getCachedRepositoryGroups,
	getRepositoryGroups as getRepositoryGroups,
	getAllRepositoryDetails,
	Ctx,
} from '#utilities/repositories.ts'
import { execa } from 'execa'
import type { Express } from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'

export function Api(app: Express) {
	app.post('/api/repositories/add-destination', async (req, res) => {
		const { name, destination } = req.body
		try {
			await addRepoDestination(name, destination)
			res.json({ success: true })
		} catch (err) {
			console.error(err)
			res.status(500).json({ error: err.message })
		}
	})
	app.post('/api/repositories/remove-destination', async (req, res) => {
		const { name, destination } = req.body
		try {
			await removeRepoDestination(name, destination)
			res.json({ success: true })
		} catch (err) {
			console.error(err)
			res.status(500).json({ error: err.message })
		}
	})
	app.post('/api/repositories/list-destinations', async (req, res) => {
		try {
			const destinations = await getRepoDestinations()
			res.json(destinations)
		} catch (err) {
			console.error(err)
			res.status(500).json({ error: err.message })
		}
	})
	app.post('/api/repositories/refresh', async (req, res) => {
		const cachePath = path.join(import.meta.dirname, 'static/repositories.json') // TODO
		const cachePath2 = path.join(import.meta.dirname, 'static/repositories2.json') // TODO
		const [json, json2] = await Promise.all([
			getRepositoryGroups(),
			getAllRepositoryDetails(),
		])
		await fs.mkdir(path.dirname(cachePath), { recursive: true })
		await fs.mkdir(path.dirname(cachePath2), { recursive: true })
		await fs.writeFile(cachePath, JSON.stringify(json, null, '\t'))
		await fs.writeFile(cachePath2, JSON.stringify(json2, null, '\t'))
		res.json({ success: true })
	})
	app.post('/api/repositories/open', async (req, res) => {
		const { owner, name } = req.body
		const json = await getCachedRepositoryGroups()
		await execa('zed', ['--new', path.join(json.cloneDir, owner, name)], {
			stdio: 'inherit',
		})
		res.send(200)
	})
	app.post('/api/repositories/clone', async (req, res) => {
		const { owner, name } = req.body
		const json = await getCachedRepositoryGroups()
		await fs.mkdir(path.join(Ctx.cloneDir, owner), { recursive: true })
		await execa('git', ['clone', path.join(Ctx.cloneDir, owner, name)], {
			stdio: 'inherit',
		})
	})
	app.post('/api/repositories/info', async (req, res) => {
		const { repos } = req.body
		const json = await getCachedRepositoryGroups()
		const ctx = json

		const result = await Promise.all(
			repos.map((fullName) => {
				return getRepoInfo(ctx, fullName)
			}),
		)
		res.send(result)
	})

	return app
}
