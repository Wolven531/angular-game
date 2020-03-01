import { Component, OnInit } from '@angular/core'
import { Minion } from '@models/minion.model'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	// selector: 'ag-game',
	styleUrls: ['./game.component.scss'],
	templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
	public coins = 0
	public minions = []
	public numSoldiers = 0

	constructor(private locStorageService: LocStorageService) {
	}

	public ngOnInit() {
		this.coins = this.locStorageService.loadCoins()
		this.minions = this.locStorageService.loadMinions()
		this.numSoldiers = this.locStorageService.loadNumSoldiers()
	}

	public onGenerateCoin(evt) {
		this.coins += LocStorageService.EXCHANGE_RATE_COIN

		this.locStorageService.saveCoins(this.coins)
	}

	public onMinionRefunded(minionIndex: number) {
		this.minions.splice(minionIndex, 1)
		this.coins += Math.round(LocStorageService.EXCHANGE_RATE_MINION * .75)

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}

	public onQuestCompleted(minionAttack: number) {
		this.coins += this.numSoldiers + minionAttack

		this.locStorageService.saveCoins(this.coins)
	}

	public onSummonMinion() {
		const newMinion = {
			attack: Minion.minAttack + Math.round(Math.random() * (Minion.maxAttack - Minion.minAttack)),
			damageTaken: 0,
			defense: Minion.minDefense + Math.round(Math.random() * (Minion.maxDefense - Minion.minDefense)),
			hp: Minion.minHitpoints + Math.round(Math.random() * (Minion.maxHitpoints - Minion.minHitpoints))
		}

		this.minions.push(newMinion)

		this.coins -= LocStorageService.EXCHANGE_RATE_MINION
		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}
}
