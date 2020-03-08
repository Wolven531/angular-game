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

	public onClearLogs() {
		this.logs = []
	}

	public onGenerateCoin() {
		this.coins += LocStorageService.EXCHANGE_RATE_COIN

		this.locStorageService.saveCoins(this.coins)
	}

	public onMinionRefunded(minionIndex: number) {
		this.minions.splice(minionIndex, 1)

		const refundAmount = Math.round(LocStorageService.EXCHANGE_RATE_MINION * .75)

		this.log(`🚼- Minion refunded. Earned coin: ${refundAmount}`)

		this.coins += refundAmount

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}

	public onSummonMinion() {
		const newMinion = new Minion()

		this.log(`👶⁜ Summoned minion: ${JSON.stringify(newMinion)}`)

		this.minions.push(newMinion)

		this.coins -= LocStorageService.EXCHANGE_RATE_MINION
		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}

	public onQuestCompleted(minion: Minion, minionIndex: number) {
		const earnedAmount = this.numSoldiers + minion.attack

		this.log(`💰$ Quest completed. Earned coin: ${earnedAmount}`)

		this.coins += earnedAmount

		const dmgChance = Math.round(Math.random() * 3)

		if (dmgChance > 2) {
			const dmg = Math.round(1 + Math.random() * 2)

			this.log(`🤺⚔ Minion takes damage: ${dmg}`)

			minion.takeDamage(dmg)

			if (minion.hitpointsRemaining === 0) {
				this.log(`💀☠ Minion at position ${minionIndex + 1} has retired due to fatigue`)
				this.minions.splice(minionIndex, 1)
			} else {
				this.log(`💖♥ But lives to fight another day w/ ${minion.hitpointsRemaining} hitpoints left`)
			}
		} else {
			this.log(`💖♥ Minion ventures on untouched w/ ${minion.hitpointsRemaining} hitpoints left`)
		}

		this.locStorageService.saveCoins(this.coins)
		this.locStorageService.saveMinions(this.minions)
	}

	public onQuestStarted(minion: Minion, minionIndex: number) {
		this.log(`🤾‍♂️⚥ Minion at position ${minionIndex + 1} has started a quest`)
	}

	private log(newMsg: string) {
		this.logs.splice(0, 0, newMsg)
	}
}
