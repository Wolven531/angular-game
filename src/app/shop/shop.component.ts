import { Component, OnInit } from '@angular/core'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	// selector: 'ag-shop',
	styleUrls: ['./shop.component.scss'],
	templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
	public coins = 0
	public goldBars = 0

	public ngOnInit() {
		this.coins = this.locStorageService.loadCoins()
		this.goldBars = this.locStorageService.loadGoldBars()
	}

	public onExchangeBarForCoins() {
		const refund = Math.round(1 / LocStorageService.EXCHANGE_RATE_GOLD_BAR)
		const removalAmount = Math.round(refund * LocStorageService.EXCHANGE_RATE_GOLD_BAR)

		if (this.goldBars < 1) {
			alert('Insufficient gold bars, need at least 1')
			return
		}

		this.coins += refund
		this.goldBars -= removalAmount

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveGoldBars(this.goldBars)
	}

	public onExchangeCoinsForBar() {
		const cost = Math.round(1 / LocStorageService.EXCHANGE_RATE_GOLD_BAR)
		const additionalAmount = Math.round(cost * LocStorageService.EXCHANGE_RATE_GOLD_BAR)

		if (this.coins < cost) {
			alert(`Insufficient coins, need at least ${cost.toFixed(0)}`)
			return
		}

		this.coins -= cost
		this.goldBars += additionalAmount

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveGoldBars(this.goldBars)
	}

	public onGoldBarsChanged(newGoldBars: number) {
		this.goldBars = newGoldBars
		this.locStorageService.saveGoldBars(this.goldBars)
	}

	constructor(private locStorageService: LocStorageService) {
	}
}
