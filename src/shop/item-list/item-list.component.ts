import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'ag-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
	goldBars = 0
	numSoldiers = 0

	constructor() {

	}

	ngOnInit() {
	}

	onPurchaseSoldier() {
	}
}
