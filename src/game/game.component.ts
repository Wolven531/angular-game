import { Component, OnInit } from '@angular/core'

import { LocStorageService } from '../storage/loc-storage.service'

// NOTE: rate vs. click - value of 1 equals "1 to 1"; this means
// means one click generates one coin
const EXCHANGE_RATE_COIN = 1
// NOTE: rate vs. coins - value of .1 equals "1 to 10"; this means
// means one gold bar exchanges for ten coins
const EXCHANGE_RATE_GOLD_BAR = .1

@Component({
	// selector: 'ag-game',
	styleUrls: ['./game.component.scss'],
	templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
	private coins = 0
	private goldBars = 0

	constructor(private locStorageService: LocStorageService) {
	}

	public ngOnInit() {
		this.coins = this.locStorageService.loadCoins()
		this.goldBars = this.locStorageService.loadGoldBars()
	}

	private onExchangeCoinsForBar(evt) {
		const cost = Math.round(1 / EXCHANGE_RATE_GOLD_BAR)
		const additionalAmount = Math.round(cost * EXCHANGE_RATE_GOLD_BAR)

		if (this.coins < cost) {
			alert(`Insufficient coins, need at least ${cost.toFixed(0)}`)
			return
		}

		this.coins -= cost
		this.goldBars += additionalAmount

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveGoldBars(this.goldBars)
	}

	private onGenerateCoin(evt) {
		this.coins += EXCHANGE_RATE_COIN

		this.locStorageService.saveCoins(this.coins)
	}
}
