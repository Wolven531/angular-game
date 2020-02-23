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

	onRefundMinion() {
		this.minionRefunded.emit()
	}

	onStartQuest(minion: any) {

	}
}
