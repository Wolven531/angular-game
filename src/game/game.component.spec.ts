import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GameComponent } from './game.component'

describe('GameComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GameComponent ]
		})
		.compileComponents()
	}))

	describe('when created', () => {
		let compiled: HTMLElement
		let fixture: ComponentFixture<GameComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(GameComponent)
			compiled = fixture.debugElement.nativeElement
		})

		it('creates game component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})
	 })
})
