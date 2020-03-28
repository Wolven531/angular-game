import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { QuesterComponent } from './quester.component'

describe('QuesterComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ QuesterComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		// let compiled: HTMLElement
		let fixture: ComponentFixture<QuesterComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(QuesterComponent)
			// compiled = fixture.debugElement.nativeElement
		})

		it('creates quester component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})
	})
})
