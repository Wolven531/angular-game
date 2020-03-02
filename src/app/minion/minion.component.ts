import { Component, Input, OnInit } from '@angular/core'
import { Minion } from '@models/minion.model'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	selector: 'ag-minion',
	styleUrls: ['./minion.component.scss'],
	templateUrl: './minion.component.html'
})
export class MinionComponent implements OnInit {
	@Input()
	public minion: Minion

	public numSoldiers = 0

	constructor(private readonly locStorageService: LocStorageService) {}

	public ngOnInit(): void {
		this.numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
