import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					AppComponent
				],
				imports: [
					RouterTestingModule
				]
			}).compileComponents()
		})
	)

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.debugElement.componentInstance
		expect(app).toBeTruthy()
	})

	// it(`should have as title 'angular-game'`, () => {
	// 	const fixture = TestBed.createComponent(AppComponent)
	// 	const app = fixture.debugElement.componentInstance
	// 	expect(app.title).toEqual('angular-game')
	// })

	it('should render header', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()

		const compiled: HTMLElement = fixture.debugElement.nativeElement
		expect(compiled.querySelectorAll('.container > .header > nav li').length).toBe(3)
	})
})
