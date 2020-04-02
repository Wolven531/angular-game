import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { GameService } from '@services/game.service'
import { ItemListComponent } from './item-list.component'

describe('ItemListComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ItemListComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		let compiled: HTMLElement
		let fixture: ComponentFixture<ItemListComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(ItemListComponent)
			compiled = fixture.debugElement.nativeElement
		})

		it('creates item list component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})

		describe('when changes are detected', () => {
			let gameServiceInstance: GameService
			let origBars: number
			let origCoins: number

			beforeEach(() => {
				gameServiceInstance = TestBed.inject(GameService)
				gameServiceInstance.coins = 0
				gameServiceInstance.goldBars = 0
				origBars = gameServiceInstance.goldBars
				origCoins = gameServiceInstance.coins

				fixture.detectChanges()
			})

			it('renders soldiers header (w/ value)', () => {
				expect(compiled.querySelector('.item-list-container h4.num-soldiers').textContent).toBe('Soldiers (0)')
				// expect(compiled.querySelector('.item-list-container h4.num-soldiers > .value').textContent).toBe('0')
			})
		})
	})
})
