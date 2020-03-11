import { Component, Input } from '@angular/core'
import { Minion } from '@models/minion.model'
import { GameService } from '@services/game.service'

@Component({
	selector: 'ag-minion',
	styleUrls: ['./minion.component.scss'],
	templateUrl: './minion.component.html'
})
export class MinionComponent {
	@Input()
	public minion: Minion

	constructor(public readonly gameService: GameService) {}
}
