import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class LocStorageService {
	public static STARTING_COINS = 0
	public static STARTING_GOLD_BARS = 0

	constructor() { }

	public loadCoins(): number {
		const loadedCoins = parseInt(window.localStorage.getItem('coins'), 10)

		return isNaN(loadedCoins)
			? LocStorageService.STARTING_COINS
			: loadedCoins
	}

	public loadGoldBars(): number {
		const loadedGoldBars = parseInt(window.localStorage.getItem('goldBars'), 10)

		return isNaN(loadedGoldBars)
			? LocStorageService.STARTING_GOLD_BARS
			: loadedGoldBars
	}

	public saveCoins(coins: number) {
		window.localStorage.setItem('coins', String(coins))
	}

	public saveGoldBars(goldBars: number) {
		window.localStorage.setItem('goldBars', String(goldBars))
	}
}
