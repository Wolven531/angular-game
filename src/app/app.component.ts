import { Component } from '@angular/core'

@Component({
	selector: 'ag-root',
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'angular-game'

	private onClickButton(evt) {
		alert('button clicked')
	}
}
