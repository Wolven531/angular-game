import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { GameService } from '@services/game.service'
// import { LocStorageService } from '@services/loc-storage.service'
// import { LoggerService } from '@services/logger.service'
// import { NameGeneratorService } from '@services/name-gen.service'
import { ItemListComponent } from './item-list.component'

describe('ItemListComponent', () => {
	beforeEach(async(() => {
		// const locS = new LocStorageService()
		// const logS = new LoggerService()
		// const nameS = new NameGeneratorService()
		// const gameS = new GameService(locS, logS, nameS)

		TestBed.configureTestingModule({
			declarations: [ ItemListComponent ],
			// providers: [
			// 	{ provide: LocStorageService, useClass: LocStorageService },
			// 	{ provide: LoggerService, useClass: LoggerService },
			// 	{ provide: NameGeneratorService, useClass: NameGeneratorService },
			// 	{ provide: GameService, useClass: GameService },
			// ]
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
			let origNumSoldiers: number

			beforeEach(() => {
				gameServiceInstance = TestBed.inject(GameService)
				gameServiceInstance.goldBars = 0
				gameServiceInstance.numSoldiers = 0
				origBars = gameServiceInstance.goldBars
				origNumSoldiers = gameServiceInstance.numSoldiers

				fixture.detectChanges()
			})

			it('renders soldiers header (w/ value)', () => {
				expect(compiled.querySelector('.item-list-container h4.num-soldiers').textContent).toBe('Soldiers (0)')
				// expect(compiled.querySelector('.item-list-container h4.num-soldiers > .value').textContent).toBe('0')
			})

			describe('purchase soldier w/ insufficient bars', () => {
				beforeEach(() => {
					fixture.componentInstance.onPurchaseSoldier()
					fixture.detectChanges()
				})

				it('does not update game service bars or soldiers', () => {
					expect(gameServiceInstance.goldBars).toBe(origBars)
					expect(gameServiceInstance.numSoldiers).toBe(origNumSoldiers)
				})
			})

			describe('purchase soldier w/ sufficient bars', () => {
				beforeEach(() => {
					gameServiceInstance.goldBars = 10
					origBars = gameServiceInstance.goldBars
					fixture.componentInstance.onPurchaseSoldier()
					fixture.detectChanges()
				})

				it('updates game service bars and soldiers', () => {
					expect(gameServiceInstance.goldBars).toBe(origBars - 5)
					expect(gameServiceInstance.numSoldiers).toBe(origNumSoldiers + 1)
				})

				it('renders soldiers header w/ updated value', () => {
					expect(compiled.querySelector('.item-list-container h4.num-soldiers').textContent).toBe('Soldiers (1)')
					// expect(compiled.querySelector('.item-list-container h4.num-soldiers > .value').textContent).toBe('1')
				})
			})
		})
	})
})
