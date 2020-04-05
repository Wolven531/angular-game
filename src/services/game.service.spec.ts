import { TestBed } from '@angular/core/testing'
import { GameService } from './game.service'

describe('GameService', () => {
	let fixture: GameService

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [] // TODO: provide MockLocStorageService here
		})
		fixture = TestBed.inject(GameService)
	})

	it('should be created w/ default values', () => {
		expect(fixture).toBeTruthy()
		// expect(fixture.coins).toBe(0)
		// expect(fixture.goldBars).toBe(0)
		// expect(fixture.hasMinions).toBe(false)
		// expect(fixture.minions).toEqual([])
		// expect(fixture.numSoldiers).toBe(0)
		// expect(fixture.soldierCost).toBe(5)
	})
})
