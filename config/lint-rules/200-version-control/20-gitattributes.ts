import { fileExists } from '#common'
import type { Issues } from '#types'

export const skip = true

export const issues: Issues = async function* issues({ project }) {
	const configFile = '.gitattributes'

	// TODO
	// let attributes = ''
	// try {
	// 	attributes = await fs.readFile(configFile, 'utf-8')
	// } catch (err) {
	// 	if (err.code !== 'ENOENT') {
	// 		throw err
	// 	}
	// }
	//
	// const newAttributes = await minimalGitAttributes(attributes)
	//
	// if (newAttributes !== attributes) {
	// 	yield {
	// 		message: [`File "${configFile}" does not have the expected contents`],
	// 		fix
	// 	}
	// }
	//
	// async function fix() {
	// 	let attributes: string = ''
	// 	try {
	// 		attributes = await fs.readFile(configFile, 'utf-8')
	// 	} catch (err) {
	// 		if (err.code !== 'ENOENT') {
	// 			throw err
	// 		}
	// 	}
	// 	const newAttributes = await minimalGitAttributes(attributes)
	//
	// 	if (typeof newAttributes === 'string') {
	// 		await fs.writeFile(configFile, newAttributes)
	// 	} else {
	// 		await fs.rm(configFile).catch((err) => {
	// 			if (err.code === 'ENOENT') {
	// 				return
	// 			}
	// 			throw err
	// 		})
	// 	}
	// }
}

async function minimalGitAttributes(input: string) {
	let content = input
	content = content.replaceAll(/# foxxo /gu, '#section:fox-tools/fix ')

	if (!content.includes('#section:fox-tools/fix start')) {
		content = `#section:fox-tools/fix start
#section:fox-tools/fix end\n` + content
	}

	let newContent = ''
	let canRemove = false
	for (const line of content.split('\n')) {
		if (line.startsWith('#section:fox-tools/fix start')) {
			canRemove = true
			newContent += line + '\n'
			continue
		} else if (line.startsWith('#section:fox-tools/fix end')) {
			if ((await fileExists('bake')) && !content.includes('bake linguist-generated')) {
				newContent += 'bake linguist-generated\n'
			}

			canRemove = false
			newContent += line + '\n'
			continue
		}

		if (canRemove) {
			if (line.includes('text=auto') || line.includes('eol=lf')) {
				continue
			}

			if (line === 'bake linguist-generated') {
				if (!(await fileExists('bake'))) {
					continue
				}
			}
		}

		newContent += line + '\n'
	}
	content = newContent
	content = content.trimEnd()
	content += '\n'

	if (
		content ===
			`#section:fox-tools/fix start
#section:fox-tools/fix end
`
	) {
		return null
	}

	return content
}
