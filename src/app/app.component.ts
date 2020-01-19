import { Component } from '@angular/core'

@Component({
	selector: 'ag-root',
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.html'
})
export class AppComponent {
	private coins = 0
	private goldBars = 0

	private onExchangeCoinsForBar(evt) {
		if (this.coins < 10) {
			alert(`Insufficient coins, need at least ${10}`)
			return
		}

		this.coins -= 10
		this.goldBars += 1
	}

	private onGenerateCoin(evt) {
		this.coins += 1
	}
}
