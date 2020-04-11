import { TestBed } from '@angular/core/testing'
import { LocStorageService } from './loc-storage.service'

describe('LocStorageService', () => {
	let fixture: LocStorageService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		fixture = new LocStorageService()
	})

	it('should be created', () => {
		expect(fixture).toBeTruthy()
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
})
