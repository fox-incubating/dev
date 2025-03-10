import os from 'node:os';

const homeDirectory = os.homedir();

function untildify(pathWithTilde) {
	if (typeof pathWithTilde !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof pathWithTilde}`);
	}

	return homeDirectory ? pathWithTilde.replace(/^~(?=$|\/|\\)/, homeDirectory) : pathWithTilde;
}

export { untildify as default };
