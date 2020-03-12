import { Component, EventEmitter, Input, Output } from '@angular/core'
import { GameService } from '@services/game.service'

@Component({
	selector: 'ag-item-list',
	styleUrls: ['./item-list.component.scss'],
	templateUrl: './item-list.component.html'
})
export class ItemListComponent {
	public onPurchaseSoldier() {
		if (this.gameService.goldBars < 5) {
			return
		}

		this.gameService.goldBars -= 5
		this.gameService.numSoldiers += 1
	}

	constructor(public readonly gameService: GameService) {}
}
