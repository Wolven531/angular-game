import { Injectable } from '@angular/core'
import { Minion } from '@models/minion.model'

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

	private KEY_COINS = 'coins'
	private KEY_GOLD_BARS = 'goldBars'
	private KEY_MINIONS = 'minions'
	private KEY_NUM_SOLDIERS = 'numSoldiers'

	public loadCoins(): number {
		const loadedCoins = parseInt(window.localStorage.getItem(this.KEY_COINS), 10)

		return isNaN(loadedCoins)
			? LocStorageService.STARTING_COINS
			: loadedCoins
	}

	public loadGoldBars(): number {
		const loadedGoldBars = parseInt(window.localStorage.getItem(this.KEY_GOLD_BARS), 10)

		return isNaN(loadedGoldBars)
			? LocStorageService.STARTING_GOLD_BARS
			: loadedGoldBars
	}

	public loadMinions(): Minion[] {
		const loadedMinions = window.localStorage.getItem(this.KEY_MINIONS)

		if (loadedMinions === null) {
			return []
		}

		const minionObjArr: any[] = JSON.parse(loadedMinions)
		const minions: Minion[] = minionObjArr.map(minObj =>
			new Minion(
				minObj._attack,
				minObj._defense,
				minObj._hp,
				minObj._damageTaken,
			))
		return minions
	}

	public loadNumSoldiers(): number {
		const loadedNumSoldiers = parseInt(window.localStorage.getItem(this.KEY_NUM_SOLDIERS), 10)

		return isNaN(loadedNumSoldiers)
			? LocStorageService.STARTING_NUM_SOLDIERS
			: loadedNumSoldiers
	}

	public saveCoins(coins: number) {
		window.localStorage.setItem(this.KEY_COINS, String(coins))
	}

	public saveGoldBars(goldBars: number) {
		window.localStorage.setItem(this.KEY_GOLD_BARS, String(goldBars))
	}

	public saveMinions(minions: Minion[]) {
		window.localStorage.setItem(this.KEY_MINIONS, JSON.stringify(minions))
	}

	public saveNumSoldiers(numSoldiers: number) {
		window.localStorage.setItem(this.KEY_NUM_SOLDIERS, String(numSoldiers))
	}
}
