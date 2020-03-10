export class Minion {
	public static MAX_ATTACK = 10
	public static MAX_DEFENSE = 3
	public static MAX_HITPOINTS = 5
	public static MIN_ATTACK = 1
	public static MIN_DEFENSE = 1
	public static MIN_HITPOINTS = 1

	public get attack(): number {
		return this._attack
	}

	public get defense(): number {
		return this._defense
	}

	public get hitpoints(): number {
		return this._hp
	}

	public get hitpointsRemaining(): number {
		return Math.max(this._hp - this._damageTaken, 0)
	}

	public get name(): string {
		return this._name
	}

	public set name(newName: string) {
		this._name = newName
	}

	public get xp(): number {
		return this._xpEarned
	}

	public addXp(additionalXp: number) {
		this._xpEarned += additionalXp
	}

	public takeDamage(amountTaken: number) {
		this._damageTaken += amountTaken
	}

	constructor(
		// tslint:disable-next-line: variable-name
		private _attack?: number,
		// tslint:disable-next-line: variable-name
		private _defense?: number,
		// tslint:disable-next-line: variable-name
		private _hp?: number,
		// tslint:disable-next-line: variable-name
		private _damageTaken?: number,
		// tslint:disable-next-line: variable-name
		private _name?: string,
		// tslint:disable-next-line: variable-name
		private _xpEarned?: number,
	) {
		this._attack = _attack === undefined
			? Minion.MIN_ATTACK + Math.round(Math.random() * (Minion.MAX_ATTACK - Minion.MIN_ATTACK))
			: _attack
		this._defense = _defense === undefined
			? Minion.MIN_DEFENSE + Math.round(Math.random() * (Minion.MAX_DEFENSE - Minion.MIN_DEFENSE))
			: _defense
		this._hp = _hp === undefined
			? Minion.MIN_HITPOINTS + Math.round(Math.random() * (Minion.MAX_HITPOINTS - Minion.MIN_HITPOINTS))
			: _hp
		this._name = _name === undefined
			? ''
			: _name
		this._xpEarned = _xpEarned === undefined
			? 0
			: _xpEarned

		this._damageTaken = _damageTaken === undefined
			? 0
			: _damageTaken
	}
}
