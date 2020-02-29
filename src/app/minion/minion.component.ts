import { Component, Input, OnInit } from '@angular/core'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	selector: 'ag-minion',
	styleUrls: ['./minion.component.scss'],
	templateUrl: './minion.component.html'
})
export class MinionComponent implements OnInit {
	@Input()
	public minion: any

	public numSoldiers = 0

	constructor(private readonly locStorageService: LocStorageService) {}

	public ngOnInit(): void {
		this.numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
