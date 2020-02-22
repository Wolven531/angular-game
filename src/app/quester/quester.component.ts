import { Component, Input } from '@angular/core'

@Component({
	selector: 'ag-quester',
	// styleUrls: ['./quester.component.scss'],
	templateUrl: './quester.component.html'
})
export class QuesterComponent {
	@Input()
	public minion: any
}
