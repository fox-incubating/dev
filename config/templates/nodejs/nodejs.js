import { execa } from 'execa'
import { badValue, templateTemplate } from '../../common.js'

/**
 * @typedef {import('../../new.js').Context} Context
 */

/**
 * @param {Context} ctx
 */
export async function run(ctx) {
	await execa('npm', ['run', 'start'], {
		stdio: 'inherit',
	})
}
