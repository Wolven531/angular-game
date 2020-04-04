import { TestBed } from '@angular/core/testing'
import { NameGeneratorService } from './name-gen.service'

describe('NameGeneratorService', () => {
	let fixture: NameGeneratorService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		fixture = TestBed.inject(NameGeneratorService)
	})

	it('should be created', () => {
		expect(fixture).toBeTruthy()
	})

	describe('invoke generateName', () => {
		let returnValue: string

		beforeEach(() => {
			returnValue = fixture.generateName()
		})

		it('generates a non-empty string', () => {
			expect(returnValue.length).toBeGreaterThan(0)
		})
	})
})
