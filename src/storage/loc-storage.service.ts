import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class LocStorageService {

	constructor() { }

	public saveCoins(coins: number) {
		window.localStorage.setItem('coins', String(coins))
	}

	public saveGoldBars(goldBars: number) {
		window.localStorage.setItem('goldBars', String(goldBars))
	}
}
