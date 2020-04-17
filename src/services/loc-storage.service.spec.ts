import { TestBed } from '@angular/core/testing'
import { LocStorageService } from './loc-storage.service'
import { Minion } from '@models/minion.model'

describe('LocStorageService', () => {
	let fixture: LocStorageService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		fixture = new LocStorageService()
	})

	it('should be created', () => {
		expect(fixture).toBeTruthy()
	})

	describe('when window.localStorage.getItem returns null', () => {
		let origGetItem

		beforeEach(() => {
			origGetItem = window.localStorage.getItem
			window.localStorage.getItem = () => null
		})

		it('loads default value for coins', () => {
			expect(fixture.loadCoins()).toBe(LocStorageService.STARTING_COINS)
		})

		it('loads default value for gold bars', () => {
			expect(fixture.loadGoldBars()).toBe(LocStorageService.STARTING_GOLD_BARS)
		})

		it('loads default value for num soldiers', () => {
			expect(fixture.loadNumSoldiers()).toBe(LocStorageService.STARTING_NUM_SOLDIERS)
		})

		it('loads default value for minions', () => {
			expect(fixture.loadMinions()).toEqual([])
		})

		afterEach(() => {
			window.localStorage.getItem = origGetItem
		})
	})

	describe('invoke saveMinions w/ empty array', () => {
		let spySetItem: jasmine.Spy

		beforeEach(() => {
			spySetItem = spyOn(window.localStorage, 'setItem')
			fixture.saveMinions([])
		})

		it('uses local storage to save the empty array', () => {
			expect(spySetItem).toHaveBeenCalledTimes(1)
		})
	})

	describe('invoke saveMinions w/ populated array', () => {
		let spySetItem: jasmine.Spy

		beforeEach(() => {
			spySetItem = spyOn(window.localStorage, 'setItem')
			fixture.saveMinions([new Minion(5, 5, 5, 1, 'mon 1', 5)])
		})

		it('uses local storage to save the empty array', () => {
			expect(spySetItem).toHaveBeenCalledTimes(1)
		})
	})
})
