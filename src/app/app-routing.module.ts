import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WelcomeComponent } from './welcome/welcome.component'

export const routes: Routes = [
	// NOTE: the root doesn't need mapped if there are no others -
	//   mapping it anyways seems to duplicate `ag-root`
	{ path: 'welcome', component: WelcomeComponent },
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
]

@NgModule({
	exports: [RouterModule],
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule { }
