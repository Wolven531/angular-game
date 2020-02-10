import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ItemListComponent } from './item-list/item-list.component'
import { ShopComponent } from './shop.component'

export const routes: Routes = [
	{ path: 'shop', component: ShopComponent }
]

@NgModule({
	declarations: [
		ItemListComponent,
		ShopComponent
	],
	exports: [
		ShopComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class ShopModule { }
