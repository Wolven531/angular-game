import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MinionComponent } from '../minion/minion.component'
import { GameComponent } from './game.component'

export const routes: Routes = [
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
