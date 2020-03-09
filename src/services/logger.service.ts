import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class LoggerService {
	private _logs: string[]

	public get hasLogs(): boolean {
		return this._logs.length > 0
	}

	public get logs(): string[] {
		return this._logs
	}

	public get logsAsLines(): string {
		return this._logs.join('\n')
	}

	public get numLogs(): number {
		return this._logs.length
	}

	constructor() {
		this._logs = []
	}

	public clearLogs(): void {
		this._logs = []
	}

	public log(newLog: string): void {
		this.logs.splice(0, 0, newLog)
	}

	public logMulti(newLogs: string[], separator = '\n'): void {
		this.logs.splice(0, 0, newLogs.join(separator))
	}
}
