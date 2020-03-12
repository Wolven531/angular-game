import { Component, EventEmitter, Input, Output } from '@angular/core'
import { GameService } from '@services/game.service'

@Component({
	selector: 'ag-item-list',
	styleUrls: ['./item-list.component.scss'],
	templateUrl: './item-list.component.html'
})
export class ItemListComponent {
	@Input()
	public goldBars: number
	@Output()
	public goldBarsChanged = new EventEmitter()

	public onPurchaseSoldier() {
		if (this.goldBars < 5) {
			return
		}

		this.goldBars -= 5
		this.gameService.numSoldiers += 1

		this.goldBarsChanged.emit(this.goldBars)
	}

	constructor(public readonly gameService: GameService) {}
}
