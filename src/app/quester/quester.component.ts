import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
	selector: 'ag-quester',
	styleUrls: ['./quester.component.scss'],
	templateUrl: './quester.component.html'
})
export class QuesterComponent {
	@Input()
	minion: any
	@Output()
	minionRefunded = new EventEmitter()
	questProgress = 0
	questTimer // NOTE: NodeJS.Timeout is the type, but tsconfig won't play nicely

	onRefundMinion() {
		this.minionRefunded.emit()
	}

	onStartQuest(minion: any) {
		if (this.questTimer) {
			return
		}

		this.questTimer = setInterval(() => {
			if (this.questProgress >= 100) {
				this.questProgress = 0
			} else {
				this.questProgress++
			}
		}, 5 * 1000 / 100) // 5 secs, 1000 millis per sec, spread across 100 ticks
	}
}
