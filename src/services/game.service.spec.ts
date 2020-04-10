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
		fixture = new GameService(
			TestBed.inject(LocStorageService),
			TestBed.inject(LoggerService),
			TestBed.inject(NameGeneratorService),
		)
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

	describe('invoke addMinion', () => {
		let spySaveMinions: jasmine.Spy

		beforeEach(() => {
			const locStorageService = TestBed.inject(LocStorageService)

			spySaveMinions = spyOn(locStorageService, 'saveMinions')

			fixture.addMinion(new Minion(5, 5, 5, 3, 'monster a', 5))
		})

		it('adds minion to the collection and invokes saveMinions', () => {
			expect(spySaveMinions).toHaveBeenCalledTimes(1)
			// expect(fixture.minions).toEqual([new Minion(5, 5, 5, 3, 'monster a', 5)])
			expect(fixture.minions).not.toEqual([])
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

		describe('invoke removeMinion (using default save param value)', () => {
			// let origMinions: Minion[]
			let spySaveMinions: jasmine.Spy

			beforeEach(() => {
				const locStorageService = TestBed.inject(LocStorageService)

				// origMinions = fixture.minions
				spySaveMinions = spyOn(locStorageService, 'saveMinions')

				// fixture.addMinion(new Minion(5, 5, 5, 2, 'monster x', 5))
				// expect(fixture.minions).not.toEqual([])
				fixture.removeMinion(0)
			})

			it('updates minions collection', () => {
				expect(spySaveMinions).toHaveBeenCalledTimes(1)
				expect(spySaveMinions).toHaveBeenCalledWith([])
				expect(fixture.minions).toEqual([])
			})
		})

		describe('invoke removeMinion (using explicitly false save param value)', () => {
			let spySaveMinions: jasmine.Spy

			beforeEach(() => {
				const locStorageService = TestBed.inject(LocStorageService)

				spySaveMinions = spyOn(locStorageService, 'saveMinions')

				// fixture.summonMinion()
				// expect(fixture.minions).not.toEqual([])
				fixture.removeMinion(0, false)
			})

			it('updates minions collection, and does not call save', () => {
				expect(spySaveMinions).not.toHaveBeenCalled()
				expect(fixture.minions).toEqual([])
			})
		})

		// describe('invoke refundMinion', () => {
		// 	// let spyRemoveMinion: jasmine.Spy

		// 	beforeEach(() => {
		// 		// spyRemoveMinion = spyOn(fixture, 'removeMinion')
		// 		fixture.refundMinion(0)
		// 	})

		// 	it('invokes removeMinion, updates minions collection and coins', () => {
		// 		// expect(spyRemoveMinion).toHaveBeenCalledTimes(1)
		// 		// expect(spyRemoveMinion).toHaveBeenLastCalledWith(0)
		// 		// expect(spyLog).toHaveBeenCalledTimes(1)
		// 		expect(fixture.coins).toBe(48)
		// 		expect(fixture.minions).toEqual([])
		// 	})
		// })
	})
})
