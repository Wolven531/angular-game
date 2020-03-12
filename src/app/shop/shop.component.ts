import { Component } from '@angular/core'
import { GameService } from '@services/game.service'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	// selector: 'ag-shop',
	styleUrls: ['./shop.component.scss'],
	templateUrl: './shop.component.html'
})
export class ShopComponent {
	public onExchangeBarForCoins() {
		const refund = Math.round(1 / LocStorageService.EXCHANGE_RATE_GOLD_BAR)
		const removalAmount = Math.round(refund * LocStorageService.EXCHANGE_RATE_GOLD_BAR)

		if (this.gameService.goldBars < 1) {
			alert('Insufficient gold bars, need at least 1')
			return
		}

		this.gameService.coins += refund
		this.gameService.goldBars -= removalAmount
	}

	public onExchangeCoinsForBar() {
		const cost = Math.round(1 / LocStorageService.EXCHANGE_RATE_GOLD_BAR)
		const additionalAmount = Math.round(cost * LocStorageService.EXCHANGE_RATE_GOLD_BAR)

		if (this.gameService.coins < cost) {
			alert(`Insufficient coins, need at least ${cost.toFixed(0)}`)
			return
		}

		this.gameService.coins -= cost
		this.gameService.goldBars += additionalAmount
	}

	constructor(public readonly gameService: GameService) {}
}
