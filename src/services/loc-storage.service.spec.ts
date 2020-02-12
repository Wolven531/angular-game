import { TestBed } from '@angular/core/testing'

import { LocStorageService } from './loc-storage.service'

describe('LocStorageService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({}))

	it('should be created', () => {
		const service: LocStorageService = TestBed.get(LocStorageService)
		expect(service).toBeTruthy()
	})
})
