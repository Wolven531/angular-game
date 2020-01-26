import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { GameModule } from '../game/game.module'
import { ShopModule } from '../shop/shop.module'
import { WelcomeComponent } from '../welcome/welcome.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		GameModule,
		ShopModule,
		AppRoutingModule
	],
	providers: []
})
export class AppModule { }
