import { Injectable } from '@angular/core'
import { LocStorageService } from '@services/loc-storage.service'

@Injectable({
	providedIn: 'root'
})
export class GameService {
	private _coins: number
	private _numSoldiers: number

	public get coins(): number {
		return this._coins
	}
	public set coins(newNum: number) {
		this._coins = newNum
		this.locStorageService.saveCoins(this._coins)
	}

	public get numSoldiers(): number {
		return this._numSoldiers
	}
	public set numSoldiers(newNum: number) {
		this._numSoldiers = newNum
	}

	constructor(private readonly locStorageService: LocStorageService) {
		this.init()
	}

	private init(): void {
		this._coins = this.locStorageService.loadCoins()
		this._numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
