import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Minion } from '@models/minion.model'
import { QuesterComponent } from './quester.component'

describe('QuesterComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ QuesterComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		let compiled: HTMLElement
		let fixture: ComponentFixture<QuesterComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(QuesterComponent)
			fixture.componentInstance.minion = new Minion(5, 4, 3, 2, 'minion 1', 100)
			compiled = fixture.debugElement.nativeElement
		})

		it('creates quester component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})

		describe('when changes are detected', () => {
			beforeEach(() => {
				fixture.detectChanges()
			})

			it('renders start, refund, and heal buttons', () => {
				expect(compiled.querySelector('.quester-container > button.btn-start-quest').textContent).toBe('Start Quest')
				expect(compiled.querySelector('.quester-container > button.btn-refund-minion').textContent).toBe('Refund for 75%')
				expect(compiled.querySelector('.quester-container > button.btn-heal-minion').textContent).toBe('Heal Minion for 3 coins and 10 XP')
			})
		})
	})
})
