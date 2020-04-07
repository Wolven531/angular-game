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

	it('should be created w/ defined properties', () => {
		expect(fixture).toBeTruthy()
		expect(fixture.coins).toBeDefined()
		expect(fixture.goldBars).toBeDefined()
		expect(fixture.hasMinions).toBeDefined()
		expect(fixture.minions).toBeDefined()
		expect(fixture.numSoldiers).toBeDefined()
		expect(fixture.soldierCost).toBeDefined()
	})

	describe('invoke generateCoin', () => {
		let origCoins: number

		beforeEach(() => {
			origCoins = fixture.coins
			fixture.generateCoin()
		})

		it('increases coin', () => {
			expect(fixture.coins).toBe(origCoins + 1)
		})
	})
})
