import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MinionComponent } from './minion.component'

describe('MinionComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MinionComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		// let compiled: HTMLElement
		let fixture: ComponentFixture<MinionComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(MinionComponent)
			// compiled = fixture.debugElement.nativeElement
		})

		it('creates minion component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})
	})
})
