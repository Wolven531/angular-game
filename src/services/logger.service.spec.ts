import { TestBed } from '@angular/core/testing'
import { LoggerService } from './logger.service'

describe('LoggerService', () => {
	let fixture: LoggerService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		fixture = TestBed.inject(LoggerService)
	})

	it('should be created', () => {
		expect(fixture).toBeTruthy()
	})

	describe('invoke log', () => {
		beforeEach(() => {
			fixture.log('message 1')
		})

		it('updates service values', () => {
			expect(fixture.hasLogs).toBe(true)
			expect(fixture.logs).toEqual(['message 1'])
			expect(fixture.logsAsLines).toBe('message 1')
			expect(fixture.numLogs).toBe(1)
		})
	})

	describe('invoke logMulti', () => {
		beforeEach(() => {
			fixture.logMulti(['message 1', 'message 2'])
		})

		it('updates service values', () => {
			expect(fixture.hasLogs).toBe(true)
			expect(fixture.logs).toEqual(['message 1\nmessage 2'])
			expect(fixture.logsAsLines).toBe('message 1\nmessage 2')
			expect(fixture.numLogs).toBe(1)
		})
	})
})
