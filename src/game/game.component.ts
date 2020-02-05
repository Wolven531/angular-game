import { Component, OnInit } from '@angular/core'

import { LocStorageService } from '../storage/loc-storage.service'

@Component({
	// selector: 'ag-game',
	styleUrls: ['./game.component.scss'],
	templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
	private coins = 0
	private minions = []

	constructor(private locStorageService: LocStorageService) {
	}

	public ngOnInit() {
		this.coins = this.locStorageService.loadCoins()
	}

	private onGenerateCoin(evt) {
		this.coins += LocStorageService.EXCHANGE_RATE_COIN

		this.locStorageService.saveCoins(this.coins)
	}

	private onSummonMinion() {
		const maxAttack = 10
		const maxDefense = 3
		const maxHitpoints = 5
		const minAttack = 1
		const minDefense = 1
		const minHitpoints = 1

		const newMinion = {
			attack: minAttack + Math.round(Math.random() * (maxAttack - minAttack)),
			damageTaken: 0,
			defense: minDefense + Math.round(Math.random() * (maxDefense - minDefense)),
			hp: minHitpoints + Math.round(Math.random() * (maxHitpoints - minHitpoints))
		}

		this.minions.push(newMinion)
	}
}
