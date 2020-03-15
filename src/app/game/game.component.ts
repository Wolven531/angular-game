import { Component } from '@angular/core'
import { GameService } from '@services/game.service'
import { LoggerService } from '@services/logger.service'

@Component({
	// selector: 'ag-game',
	styleUrls: ['./game.component.scss'],
	templateUrl: './game.component.html'
})
export class GameComponent {
	constructor(
		public readonly loggerService: LoggerService,
		public readonly gameService: GameService) {}

	public onClearLogs() {
		this.loggerService.clearLogs()
	}

	public onGenerateCoin() {
		this.gameService.generateCoin()
	}

	public onMinionHealed(minionIndex: number) {
		this.gameService.healMinion(minionIndex)
	}

	public onMinionRefunded(minionIndex: number) {
		this.gameService.refundMinion(minionIndex)
	}

	public onQuestCompleted(minionIndex: number) {
		this.gameService.completeQuest(minionIndex)
	}

	public onSummonMinion() {
		this.gameService.summonMinion()
	}
}
