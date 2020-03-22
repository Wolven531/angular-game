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
	shouldUseSVG = false
	@Input()
	shouldUseDynamicColoring = true
	@Input()
	thresholdAlmostComplete = 88
	@Input()
	thresholdHalfComplete = 50
	@Input()
	value = 0
}
