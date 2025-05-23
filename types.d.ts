declare global {
	var skipTerminalCleanup: boolean
	var ws: WebSocket
}

// Server.
export type PageDataFn<T> = () => Promise<T>

// Commands.
export type CommandNewOptions = {
	ecosystem?: string
	templateName?: string
	projectName?: string
	force?: boolean
	options?: string
}

export type CommandFixOptions = {
	yes?: boolean
	match?: string[]
	exclude?: string[]
	only?: string[]
}

export type CommandInstallOptions = {}

export type CommandReposOptions = {}

export type CommandScriptOptions = {}

export type CommandStartServerOptions = {
	prebundle?: boolean
}

// Fix.
export type Config = { rules?: Record<string, 'off'> }
export type Project =
	| {
			type: 'only-directory'
			rootDir: string
			name: string
	  }
	| {
			type: 'under-version-control'
			rootDir: string
			name: string
			branchName: string
	  }
	| {
			type: 'with-remote-url'
			rootDir: string
			name: string
			branchName: string
			remoteName: string
			remoteUrl: string
			owner: string
	  }

export type Issues = (arg0: {
	project: Project
	config: {
		projectSize: 'small' | 'large'
		ignoredChecks: string[]
	}
}) => AsyncGenerator<Issue>

export type Issue = {
	id?: string
	message: string | string[]
	fix?: (() => void) | (() => Promise<void>)
}

// Install.
type InstalledProjectData = {
	isCloned: boolean
	isInstalled: boolean
	gitRef: string
	latestGitRef: string
	versions: string[]
}

export type InstalledProject = {
	name: string
	url: string
	install: string
	uninstall: string
	installed: () => Promise<boolean>
	data?: InstalledProjectData
}
