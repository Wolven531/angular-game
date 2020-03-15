import { Injectable } from '@angular/core'
import { Minion } from '@models/minion.model'
import { LocStorageService } from '@services/loc-storage.service'
import { LoggerService } from '@services/logger.service'

@Injectable({
	providedIn: 'root'
})
export class GameService {
	private _coins: number
	private _goldBars: number
	private _minions: Minion[]
	private _numSoldiers: number

	public get coins(): number {
		return this._coins
	}
	public set coins(newNum: number) {
		this._coins = newNum
		this.locStorageService.saveCoins(this._coins)
	}

	public get goldBars(): number {
		return this._goldBars
	}
	public set goldBars(newNum: number) {
		this._goldBars = newNum
		this.locStorageService.saveGoldBars(this._goldBars)
	}

	public get hasMinions(): boolean {
		return this._minions.length > 0
	}

	public get minions(): Minion[] {
		return this._minions
	}

	public get numSoldiers(): number {
		return this._numSoldiers
	}
	public set numSoldiers(newNum: number) {
		this._numSoldiers = newNum
		this.locStorageService.saveNumSoldiers(this._numSoldiers)
	}

	public get soldierCost(): number {
		switch(this._numSoldiers) {
		case 0:
			return 5
		case 1:
			return 20
		case 2:
			return 100
		case 3:
			return 250
		case 4:
			return 500
		default:
			return (this._numSoldiers + 1) * 500
		}
	}

	/**
	 * Add a minion to the collection
	 * @param minion Minion - the minion to be added to the collection
	 */
	public addMinion(minion: Minion): void {
		this._minions.push(minion)
		this.locStorageService.saveMinions(this._minions)
	}

	/**
	 * Add coin
	 * @description Uses the public setter (for save functionality) to increase coin amount
	 */
	public generateCoin() {
		this.coins += LocStorageService.EXCHANGE_RATE_COIN
	}

	/**
	 * Heal a minion in the collection
	 * @param minionIndex number - index (zero-based) of the minion to heal
	 */
	public healMinion(minionIndex: number) {
		const minion = this._minions[minionIndex]
		minion.heal()

		this.loggerService.log(`🚑 - ${minion.name} healed. Spent coin: ${3}. Spent XP: ${10}`)
		
		this.locStorageService.saveMinions(this._minions)
		this.coins -= 3
	}

	/**
	 * Add a minion from the collection
	 * @param minionIndex number - index (zero-based) of the minion to remove
	 */
	public removeMinion(minionIndex: number): void {
		this._minions.splice(minionIndex, 1)
		this.locStorageService.saveMinions(this._minions)
	}

	constructor(
		private readonly locStorageService: LocStorageService,
		private readonly loggerService: LoggerService) {
		this.init()
	}

	private init(): void {
		this._coins = this.locStorageService.loadCoins()
		this._goldBars = this.locStorageService.loadGoldBars()
		this._minions = this.locStorageService.loadMinions()
		this._numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
