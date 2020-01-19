import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// import { AppComponent } from './app.component'

const routes: Routes = [
	// NOTE: the root doesn't need mapped if there are no others -
	//   mapping it anyways seems to duplicate `ag-root`
	// { path: '', component: AppComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
