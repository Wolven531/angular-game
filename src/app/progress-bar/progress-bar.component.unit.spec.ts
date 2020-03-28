import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ProgressBarComponent } from './progress-bar.component'

describe('ProgressBarComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProgressBarComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		// let compiled: HTMLElement
		let fixture: ComponentFixture<ProgressBarComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(ProgressBarComponent)
			// compiled = fixture.debugElement.nativeElement
		})

		it('creates progress bar component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})
	})
})
