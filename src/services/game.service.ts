import { Injectable } from '@angular/core'
import { Minion } from '@models/minion.model'
import { LocStorageService } from '@services/loc-storage.service'
import { LoggerService } from '@services/logger.service'
import { NameGeneratorService } from '@services/name-gen.service'

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
		switch (this._numSoldiers) {
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
	 * Complete a quest for a minion - this earns gold, XP, and potential damage on the minion
	 * @param minionIndex number - index (zero-based) of the minion for which quest logic will be executed
	 */
	public completeQuest(minionIndex: number) {
		const constructedMsg: string[] = []
		const dmgChance = Math.round(Math.random() * 3)
		const earnedXP = Math.round(1 + Math.random() * 2)
		const minion = this._minions[minionIndex]

		const earnedCoin = this._numSoldiers + minion.attack

		constructedMsg.push(`💰$ ${minion.name} completed a quest. Earned coin: ${earnedCoin}. Earned XP: ${earnedXP}`)
		minion.addXp(earnedXP)

		if (dmgChance > 2) {
			const dmg = Math.round(1 + Math.random() * 2)

			constructedMsg.push(`\t🤺⚔ ${minion.name} takes damage: ${dmg}`)

			minion.takeDamage(dmg)

			if (minion.hitpointsRemaining === 0) {
				constructedMsg.push(`\t\t💀☠ ${minion.name} has retired due to fatigue`)
				this.removeMinion(minionIndex, false)
			} else {
				constructedMsg.push(`\t\t💖♥ But ${minion.name} lives to fight another day w/ ${minion.hitpointsRemaining} hitpoints left`)
			}
		} else {
			constructedMsg.push(`\t💖♥ ${minion.name} ventures on untouched w/ ${minion.hitpointsRemaining} hitpoints left`)
		}

		this.loggerService.logMulti(constructedMsg)

		this.locStorageService.saveMinions(this._minions)
		this.coins += earnedCoin
	}

	/**
	 * Increase coin
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
	 * Remove a minion from the collection and increase coin
	 * @param minionIndex number - index (zero-based) of the minion to refund
	 */
	public refundMinion(minionIndex: number) {
		const minion = this._minions[minionIndex]
		const refundAmount = Math.round(LocStorageService.EXCHANGE_RATE_MINION * .75)

		this.loggerService.log(`🚼- ${minion.name} refunded. Earned coin: ${refundAmount}`)

		this.removeMinion(minionIndex)
		this.coins += refundAmount
	}

	/**
	 * Remove a minion from the collection
	 * @param minionIndex number - index (zero-based) of the minion to remove
	 */
	public removeMinion(minionIndex: number, shouldSave = true): void {
		this._minions.splice(minionIndex, 1)

		if (shouldSave) {
			this.locStorageService.saveMinions(this._minions)
		}
	}

	/**
	 * Create a new minion, add it to the collection, and reduce coin
	 */
	public summonMinion() {
		const newMinion = new Minion()
		newMinion.name = this.nameGenService.generateName()

		this.loggerService.log(`👶⁜ Summoned minion, ${newMinion.name}: ${JSON.stringify(newMinion)}`)

		this.addMinion(newMinion)
		this.coins -= LocStorageService.EXCHANGE_RATE_MINION
	}

	constructor(
		private readonly locStorageService: LocStorageService,
		private readonly loggerService: LoggerService,
		private readonly nameGenService: NameGeneratorService) {
		this.init()
	}

	private init(): void {
		this._coins = this.locStorageService.loadCoins()
		this._goldBars = this.locStorageService.loadGoldBars()
		this._minions = this.locStorageService.loadMinions()
		this._numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
