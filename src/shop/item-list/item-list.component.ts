import { Component, OnInit } from '@angular/core'

import { LocStorageService } from '@services/loc-storage.service'

@Component({
	selector: 'ag-item-list',
	styleUrls: ['./item-list.component.scss'],
	templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
	goldBars = 0
	numSoldiers = 0

	ngOnInit() {
		this.goldBars = this.locStorageService.loadGoldBars()
	}

	onPurchaseSoldier() {
		if (this.goldBars < 5) {
			return
		}

		this.goldBars -= 5
		this.numSoldiers += 1

		this.locStorageService.saveGoldBars(this.goldBars)
	}

	constructor(private locStorageService: LocStorageService) {}
}
