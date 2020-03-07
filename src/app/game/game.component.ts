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
	public logs: string[] = []
	public minions: Minion[] = []
	public numSoldiers = 0

	constructor(private locStorageService: LocStorageService) {
	}

	public ngOnInit() {
		this.coins = this.locStorageService.loadCoins()
		this.minions = this.locStorageService.loadMinions()
		this.numSoldiers = this.locStorageService.loadNumSoldiers()
	}

	public onGenerateCoin() {
		this.coins += LocStorageService.EXCHANGE_RATE_COIN

		this.locStorageService.saveCoins(this.coins)
	}

	public onMinionRefunded(minionIndex: number) {
		this.minions.splice(minionIndex, 1)
		this.coins += Math.round(LocStorageService.EXCHANGE_RATE_MINION * .75)

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}

	public onQuestCompleted(minion: Minion, minionIndex: number) {
		this.coins += this.numSoldiers + minion.attack

		const dmgChance = Math.round(Math.random() * 3)

		if (dmgChance > 2) {
			const dmg = Math.round(1 + Math.random() * 2)
			minion.takeDamage(dmg)

			if (minion.hitpointsRemaining === 0) {
				this.minions.splice(minionIndex, 1)
			}
		}

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}

	public onSummonMinion() {
		const newMinion = new Minion()

		this.log(`Summoned minion: ${JSON.stringify(newMinion)}`)

		this.minions.push(newMinion)

		this.coins -= LocStorageService.EXCHANGE_RATE_MINION
		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}

	private log(newMsg: string) {
		this.logs.push(newMsg)
	}
}
