import { Component, OnInit } from '@angular/core'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	// selector: 'ag-game',
	styleUrls: ['./game.component.scss'],
	templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
	public coins = 0
	public minions = []

	constructor(private locStorageService: LocStorageService) {
	}

	public ngOnInit() {
		this.coins = this.locStorageService.loadCoins()
	}

	public onGenerateCoin(evt) {
		this.coins += LocStorageService.EXCHANGE_RATE_COIN

		this.locStorageService.saveCoins(this.coins)
	}

	public onMinionRefunded(minionIndex: number) {
		this.minions.splice(minionIndex, 1)
		this.coins += Math.round(LocStorageService.EXCHANGE_RATE_MINION * .75)

		this.locStorageService.saveCoins(this.coins)
	}

	public onQuestCompleted() {
		this.coins += 1

		this.locStorageService.saveCoins(this.coins)
	}

	public onSummonMinion() {
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

		this.coins -= LocStorageService.EXCHANGE_RATE_MINION
		this.locStorageService.saveCoins(this.coins)
	}
}
