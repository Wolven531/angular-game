import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { WelcomeComponent } from './welcome.component'

describe('WelcomeComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WelcomeComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		// let compiled: HTMLElement
		let fixture: ComponentFixture<WelcomeComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(WelcomeComponent)
			// compiled = fixture.debugElement.nativeElement
		})

		it('creates welcome component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})
	})
})
