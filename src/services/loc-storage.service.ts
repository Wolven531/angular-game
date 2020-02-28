import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class LocStorageService {
	// NOTE: rate vs. click - value of 1 equals "1 to 1"; this means
	// means one click generates one coin
	public static EXCHANGE_RATE_COIN = 1
	// NOTE: rate vs. coins - value of .1 equals "1 to 10"; this means
	// means one gold bar exchanges for ten coins
	public static EXCHANGE_RATE_GOLD_BAR = .1
	// NOTE: rate vs. click - value of 10 equals "10 to 1"; this means
	// means one click costs 10 coin
	public static EXCHANGE_RATE_MINION = 10

	public static STARTING_COINS = 0
	public static STARTING_GOLD_BARS = 0
	public static STARTING_NUM_SOLDIERS = 0

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

	public loadMinions(): any[] {
		const loadedMinions = window.localStorage.getItem('minions')

		return loadedMinions === null
			? []
			: JSON.parse(loadedMinions)
	}

	public loadNumSoldiers(): number {
		const loadedNumSoldiers = parseInt(window.localStorage.getItem('numSoldiers'), 10)

		return isNaN(loadedNumSoldiers)
			? LocStorageService.STARTING_NUM_SOLDIERS
			: loadedNumSoldiers
	}

	public saveCoins(coins: number) {
		window.localStorage.setItem('coins', String(coins))
	}

	public saveGoldBars(goldBars: number) {
		window.localStorage.setItem('goldBars', String(goldBars))
	}

	public saveMinions(minions: any[]) {
		window.localStorage.setItem('minions', JSON.stringify(minions))
	}

	public saveNumSoldiers(numSoldiers: number) {
		window.localStorage.setItem('numSoldiers', String(numSoldiers))
	}
}
