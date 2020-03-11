import { Component, OnInit } from '@angular/core'
import { GameService } from '@services/game.service'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	// selector: 'ag-shop',
	styleUrls: ['./shop.component.scss'],
	templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
	public goldBars = 0

	public ngOnInit() {
		this.goldBars = this.locStorageService.loadGoldBars()
	}

	public onExchangeBarForCoins() {
		const refund = Math.round(1 / LocStorageService.EXCHANGE_RATE_GOLD_BAR)
		const removalAmount = Math.round(refund * LocStorageService.EXCHANGE_RATE_GOLD_BAR)

		if (this.goldBars < 1) {
			alert('Insufficient gold bars, need at least 1')
			return
		}

		this.gameService.coins += refund
		this.goldBars -= removalAmount

		this.locStorageService.saveCoins(this.gameService.coins)
		this.locStorageService.saveGoldBars(this.goldBars)
	}

	public onExchangeCoinsForBar() {
		const cost = Math.round(1 / LocStorageService.EXCHANGE_RATE_GOLD_BAR)
		const additionalAmount = Math.round(cost * LocStorageService.EXCHANGE_RATE_GOLD_BAR)

		if (this.gameService.coins < cost) {
			alert(`Insufficient coins, need at least ${cost.toFixed(0)}`)
			return
		}

		this.gameService.coins -= cost
		this.goldBars += additionalAmount

		this.locStorageService.saveCoins(this.gameService.coins)
		this.locStorageService.saveGoldBars(this.goldBars)
	}

	public onGoldBarsChanged(newGoldBars: number) {
		this.goldBars = newGoldBars
		this.locStorageService.saveGoldBars(this.goldBars)
	}

	constructor(
		private readonly locStorageService: LocStorageService,
		public readonly gameService: GameService) {}
}
