import { Component, Input } from '@angular/core'

@Component({
	selector: 'ag-progress',
	styleUrls: ['./progress-bar.component.scss'],
	templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {
	@Input()
	colorAlmostComplete = '#0f0'
	@Input()
	colorHalfComplete = '#ff0'
	@Input()
	colorStartingToComplete = '#f00'
	@Input()
	shouldUseDynamicColoring = true
	@Input()
	value = 0
}
