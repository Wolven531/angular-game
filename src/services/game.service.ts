import { Injectable } from '@angular/core'
import { LocStorageService } from '@services/loc-storage.service'

@Injectable({
	providedIn: 'root'
})
export class GameService {
	private _coins: number
	private _goldBars: number
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

	constructor(private readonly locStorageService: LocStorageService) {
		this.init()
	}

	private init(): void {
		this._coins = this.locStorageService.loadCoins()
		this._goldBars = this.locStorageService.loadGoldBars()
		this._numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
