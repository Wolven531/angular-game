import { Component } from '@angular/core'

// NOTE: rate vs. click - value of 1 equals "1 to 1"; this means
// means one click generates one coin
const EXCHANGE_RATE_COIN = 1
// NOTE: rate vs. coins - value of .1 equals "1 to 10"; this means
// means one gold bar exchanges for ten coins
const EXCHANGE_RATE_GOLD_BAR = .1
const STARTING_COINS = 0
const STARTING_GOLD_BARS = 0

@Component({
	// selector: 'ag-game',
	styleUrls: ['./game.component.scss'],
	templateUrl: './game.component.html'
})
export class GameComponent {
	private coins = STARTING_COINS
	private goldBars = STARTING_GOLD_BARS

	private onExchangeCoinsForBar(evt) {
		const cost = Math.round(1 / EXCHANGE_RATE_GOLD_BAR)
		const additionalAmount = Math.round(cost * EXCHANGE_RATE_GOLD_BAR)

		if (this.coins < cost) {
			alert(`Insufficient coins, need at least ${cost.toFixed(0)}`)
			return
		}

		this.coins -= cost
		this.goldBars += additionalAmount
	}

	private onGenerateCoin(evt) {
		this.coins += EXCHANGE_RATE_COIN
	}
}
