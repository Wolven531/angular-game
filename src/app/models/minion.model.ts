export class Minion {
	public static MAX_ATTACK = 10
	public static MAX_DEFENSE = 3
	public static MAX_HITPOINTS = 5
	public static MIN_ATTACK = 1
	public static MIN_DEFENSE = 1
	public static MIN_HITPOINTS = 1

	public get attack() {
		return this._attack
	}

	public get defense() {
		return this._defense
	}

	public get hitpoints() {
		return this._hp
	}

	public get hitpointsRemaining() {
		return Math.max(this._hp - this._damageTaken, 0)
	}

	// tslint:disable-next-line: variable-name
	private _attack: number
	// tslint:disable-next-line: variable-name
	private _defense: number
	// tslint:disable-next-line: variable-name
	private _hp: number
	// tslint:disable-next-line: variable-name
	private _damageTaken: number

	constructor() {
		this._attack = Minion.MIN_ATTACK + Math.round(Math.random() * (Minion.MAX_ATTACK - Minion.MIN_ATTACK))
		this._defense = Minion.MIN_DEFENSE + Math.round(Math.random() * (Minion.MAX_DEFENSE - Minion.MIN_DEFENSE))
		this._hp = Minion.MIN_HITPOINTS + Math.round(Math.random() * (Minion.MAX_HITPOINTS - Minion.MIN_HITPOINTS))

		this._damageTaken = 0
	}
}
