import { Component, Input } from '@angular/core'

@Component({
	selector: 'ag-progress',
	styleUrls: ['./progress-bar.component.scss'],
	templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {
	@Input()
	value = 0
}
