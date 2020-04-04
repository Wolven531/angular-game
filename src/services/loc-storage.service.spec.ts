import { TestBed } from '@angular/core/testing'
import { LocStorageService } from './loc-storage.service'

describe('LocStorageService', () => {
	let fixture: LocStorageService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		fixture = TestBed.inject(LocStorageService)
	})

	it('should be created', () => {
		expect(fixture).toBeTruthy()
	})
})
