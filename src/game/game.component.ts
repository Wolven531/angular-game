import { Component } from '@angular/core'

const COST_GOLD_BAR = 10
const STARTING_COINS = 0
const STARTING_GOLD_BARS = 0

@Component({
	selector: 'ag-game',
	styleUrls: ['./game.component.scss'],
	templateUrl: './game.component.html'
})
export class GameComponent {
	private coins = STARTING_COINS
	private goldBars = STARTING_GOLD_BARS

	private onExchangeCoinsForBar(evt) {
		if (this.coins < COST_GOLD_BAR) {
			alert(`Insufficient coins, need at least ${COST_GOLD_BAR.toFixed(0)}`)
			return
		}

		this.coins -= COST_GOLD_BAR
		this.goldBars += 1
	}

	private onGenerateCoin(evt) {
		this.coins += 1
	}
}
