import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing'
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

	describe('when created', () => {
		let fixture: ComponentFixture<AppComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(AppComponent)
		})

		it('creates app component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})

		it('renders header w/ 3 nav links', () => {
			// fixture.detectChanges() // NOTE: only call when component changes the HTML (e.g. interpolation)
			const compiled: HTMLElement = fixture.debugElement.nativeElement
			const navLinks = compiled.querySelectorAll('.container > .header > nav li')

			expect(navLinks.length).toBe(3)
			expect(navLinks.item(0).textContent).toBe('Home')
			expect(navLinks.item(1).textContent).toBe('Game')
			expect(navLinks.item(2).textContent).toBe('Shop')
		})
	})

	// it(`should have as title 'angular-game'`, () => {
	// 	const fixture = TestBed.createComponent(AppComponent)
	// 	const app = fixture.debugElement.componentInstance
	// 	expect(app.title).toEqual('angular-game')
	// })
})
