import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { GameModule } from '../game/game.module'
import { WelcomeComponent } from '../welcome/welcome.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		GameModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
