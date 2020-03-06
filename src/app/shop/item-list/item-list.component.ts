import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { LocStorageService } from '@services/loc-storage.service'

@Component({
	selector: 'ag-item-list',
	styleUrls: ['./item-list.component.scss'],
	templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
	@Input()
	public goldBars: number
	@Output()
	public goldBarsChanged = new EventEmitter()

	public numSoldiers = 0

	public ngOnInit() {
		this.numSoldiers = this.locStorageService.loadNumSoldiers()
	}

	public onPurchaseSoldier() {
		if (this.goldBars < 5) {
			return
		}

		this.goldBars -= 5
		this.numSoldiers += 1

		this.goldBarsChanged.emit(this.goldBars)
		this.locStorageService.saveNumSoldiers(this.numSoldiers)
	}

	constructor(private locStorageService: LocStorageService) {}
}
