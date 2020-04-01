import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { GameService } from '@services/game.service'
import { ItemListComponent } from './item-list/item-list.component'
import { ShopComponent } from './shop.component'

describe('ShopComponent', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					ItemListComponent,
					ShopComponent
				]
			})
				.compileComponents()
		})
	)

	describe('when created', () => {
		let compiled: HTMLElement
		let fixture: ComponentFixture<ShopComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(ShopComponent)
			compiled = fixture.debugElement.nativeElement
		})

		it('creates shop component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})

		it('renders headers', () => {
			expect(compiled.querySelector('.shop-container > h3:nth-of-type(1)').textContent).toBe('Shop')
			expect(compiled.querySelector('.shop-container > h3.coins').textContent).toBe('Num coins: ')
			expect(compiled.querySelector('.shop-container > h3.gold').textContent).toBe('Num gold bars: ')
		})

		it('renders buttons', () => {
			const buttons = compiled.querySelectorAll('.shop-container > button')
			expect(buttons.length).toBe(2)

			expect(buttons.item(0).textContent).toBe('Exchange 10 coins for gold bar')
			expect(buttons.item(0).classList.contains('btn-exchange-coins')).toBe(true)

			expect(buttons.item(1).textContent).toBe('Exchange 1 gold bar for 10 coins')
			expect(buttons.item(1).classList.contains('btn-exchange-bars')).toBe(true)
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

			it('renders hydrated header (w/ value)', () => {
				expect(compiled.querySelector('.shop-container > h3.coins').textContent).toBe('Num coins: 0')
				expect(compiled.querySelector('.shop-container > h3.coins > .value').textContent).toBe('0')
				expect(compiled.querySelector('.shop-container > h3.gold').textContent).toBe('Num gold bars: 0')
				expect(compiled.querySelector('.shop-container > h3.gold > .value').textContent).toBe('0')
			})

			it('renders hydrated buttons (w/ possible disabled attribute)', () => {
				const buttons = compiled.querySelectorAll('.shop-container > button')
				expect(buttons.length).toBe(2)

				const exchangeCoinsDisabledAtt = buttons.item(0).getAttributeNode('disabled')
				expect(exchangeCoinsDisabledAtt).not.toBeNull()
				expect(exchangeCoinsDisabledAtt.value).toBe('')

				const exchangeBarsDisabledAtt = buttons.item(1).getAttributeNode('disabled')
				expect(exchangeBarsDisabledAtt).not.toBeNull()
				expect(exchangeBarsDisabledAtt.value).toBe('')
			})

			describe('exchanging bar for coins w/ insufficient bars', () => {
				beforeEach(() => {
					fixture.componentInstance.onExchangeBarForCoins()
					fixture.detectChanges()
				})

				it('does not update game service coins or bars', () => {
					expect(gameServiceInstance.coins).toBe(origCoins)
					expect(gameServiceInstance.goldBars).toBe(origBars)
				})
			})

			describe('exchanging coins for bars w/ insufficient coins', () => {
				beforeEach(() => {
					fixture.componentInstance.onExchangeCoinsForBar()
					fixture.detectChanges()
				})

				it('does not update game service coins or bars', () => {
					expect(gameServiceInstance.coins).toBe(origCoins)
					expect(gameServiceInstance.goldBars).toBe(origBars)
				})
			})

			describe('exchanging bar for coins w/ sufficient coins', () => {
				beforeEach(() => {
					gameServiceInstance.coins = 10
					gameServiceInstance.goldBars = 5
					origBars = gameServiceInstance.goldBars
					origCoins = gameServiceInstance.coins

					fixture.componentInstance.onExchangeBarForCoins()
					fixture.detectChanges()
				})

				it('increases game service coins and decreases bars', () => {
					expect(gameServiceInstance.coins).toBe(origCoins + 10)
					expect(gameServiceInstance.goldBars).toBe(origBars - 1)
				})
			})

			describe('exchanging coins for bar w/ sufficient coins', () => {
				beforeEach(() => {
					gameServiceInstance.coins = 10
					gameServiceInstance.goldBars = 5
					origBars = gameServiceInstance.goldBars
					origCoins = gameServiceInstance.coins

					fixture.componentInstance.onExchangeCoinsForBar()
					fixture.detectChanges()
				})

				it('decreases game service coins and increases bars', () => {
					expect(gameServiceInstance.coins).toBe(origCoins - 10)
					expect(gameServiceInstance.goldBars).toBe(origBars + 1)
				})
			})
		})
	})
})
