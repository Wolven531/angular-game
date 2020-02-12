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

	constructor(private locStorageService: LocStorageService) {

	}

	ngOnInit() {
		this.goldBars = this.locStorageService.loadGoldBars()
	}

	onPurchaseSoldier() {
	}
}
