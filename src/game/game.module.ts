import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';

@NgModule({
	declarations: [
		GameComponent
	],
	exports: [
		GameComponent
	],
	imports: [
		CommonModule
	]
})
export class GameModule { }
