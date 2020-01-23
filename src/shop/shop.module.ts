import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ShopComponent } from './shop.component'

@NgModule({
	declarations: [
		ShopComponent
	],
	exports: [
		ShopComponent
	],
	imports: [
		CommonModule
	]
})
export class ShopModule { }
