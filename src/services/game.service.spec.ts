import { TestBed } from '@angular/core/testing'
import { GameService } from './game.service'
import { LoggerService } from './logger.service'
import { NameGeneratorService } from './name-gen.service'
import { LocStorageService } from './loc-storage.service'
import { Minion } from '@models/minion.model'

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

	describe('invoke summonMinion', () => {
		let origCoins = 50
		let spyAddMinion: jasmine.Spy
		let spyGenerateName: jasmine.Spy
		let spyLog: jasmine.Spy

		beforeEach(() => {
			const loggerService = TestBed.inject(LoggerService)
			const nameGenService = TestBed.inject(NameGeneratorService)

			fixture.coins = origCoins
			spyAddMinion = spyOn(fixture, 'addMinion')
			spyGenerateName = spyOn(nameGenService, 'generateName')
			spyLog = spyOn(loggerService, 'log')

			fixture.summonMinion()
		})

		it('adds new minion, logs the event, and decreases coins', () => {
			expect(fixture.coins).toBe(origCoins - 10)
			expect(spyAddMinion).toHaveBeenCalledTimes(1)
			expect(spyGenerateName).toHaveBeenCalledTimes(1)
			expect(spyLog).toHaveBeenCalledTimes(1)
		})

		describe('invoke removeMinion', () => {
			// let origMinions: Minion[]
			let spySaveMinions: jasmine.Spy

			beforeEach(() => {
				const locStorageService = TestBed.inject(LocStorageService)

				// origMinions = fixture.minions
				spySaveMinions = spyOn(locStorageService, 'saveMinions')

				fixture.removeMinion(0)
			})

			it('updates minions collection', () => {
				expect(spySaveMinions).toHaveBeenCalledTimes(1)
				expect(spySaveMinions).toHaveBeenCalledWith([])
				expect(fixture.minions).toEqual([])
			})
		})
	})
})
