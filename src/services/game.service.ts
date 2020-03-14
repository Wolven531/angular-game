import { Injectable } from '@angular/core'
import { Minion } from '@models/minion.model'
import { LocStorageService } from '@services/loc-storage.service'

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

	public addMinion(minion: Minion): void {
		this._minions.push(minion)
		this.locStorageService.saveMinions(this._minions)
	}

	public removeMinion(minionIndex: number): void {
		this._minions.splice(minionIndex, 1)
		this.locStorageService.saveMinions(this._minions)
	}

	constructor(private readonly locStorageService: LocStorageService) {
		this.init()
	}

	private init(): void {
		this._coins = this.locStorageService.loadCoins()
		this._goldBars = this.locStorageService.loadGoldBars()
		this._minions = this.locStorageService.loadMinions()
		this._numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
