import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Minion } from '@models/minion.model'
import { LoggerService } from '@services/logger.service'

@Component({
	selector: 'ag-quester',
	styleUrls: ['./quester.component.scss'],
	templateUrl: './quester.component.html'
})
export class QuesterComponent {
	@Input()
	minion: Minion
	@Output()
	minionRefunded = new EventEmitter()
	@Output()
	questCompleted = new EventEmitter()
	@Output()
	questStarted = new EventEmitter()

	questProgress = 0
	questTimer // NOTE: NodeJS.Timeout is the type, but tsconfig won't play nicely

	constructor(private loggerService: LoggerService) {}

	onRefundMinion() {
		this.minionRefunded.emit()
	}

	onStartQuest(minion: Minion) {
		if (this.questTimer) {
			return
		}

		this.loggerService.log(`🤾‍♂️⚥ ${minion.name} has started a quest`)
		this.questStarted.emit()

		this.questTimer = setInterval(() => {
			if (this.questProgress >= 100) {
				this.questCompleted.emit()
				this.questProgress = 0
			} else {
				this.questProgress++
			}
		}, 5 * 1000 / 100) // 5 secs, 1000 millis per sec, spread across 100 ticks
	}
}
