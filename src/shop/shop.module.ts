import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ShopComponent } from './shop.component'

const routes = [
	{ path: 'shop', component: ShopComponent }
]

@NgModule({
	declarations: [
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
