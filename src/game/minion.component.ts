import { Component, Input } from '@angular/core'

@Component({
	selector: 'ag-minion',
	styleUrls: ['./minion.component.scss'],
	templateUrl: './minion.component.html'
})
export class MinionComponent {
	@Input()
	public minion: any
}