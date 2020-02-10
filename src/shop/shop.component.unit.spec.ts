import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing'

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
			.compileComponents();
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
			expect(compiled.querySelector('.shop-container > h3.gold')).toBeNull()
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
			beforeEach(() => {
				fixture.detectChanges()
			})

			it('hides conditional header', () => {
				expect(compiled.querySelector('.shop-container > h3.gold')).toBeNull()
			})

			it('renders hydrated header (w/ value)', () => {
				expect(compiled.querySelector('.shop-container > h3.coins').textContent).toBe('Num coins: 0')
				expect(compiled.querySelector('.shop-container > h3.coins > .value').textContent).toBe('0')
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
		})
	})
})
