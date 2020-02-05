import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { GameComponent } from './game.component'
import { MinionComponent } from './minion.component'

const routes = [
	{ path: 'game', component: GameComponent }
]

@NgModule({
	declarations: [
		GameComponent,
		MinionComponent
	],
	exports: [
		GameComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class GameModule { }
