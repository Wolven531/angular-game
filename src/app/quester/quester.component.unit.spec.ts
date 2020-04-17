import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Minion } from '@models/minion.model'
import { GameService } from '@services/game.service'
import { QuesterComponent } from './quester.component'

describe('QuesterComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ QuesterComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		let compiled: HTMLElement
		let fixture: ComponentFixture<QuesterComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(QuesterComponent)
			fixture.componentInstance.minion = new Minion(5, 4, 3, 2, 'minion 1', 100)
			compiled = fixture.debugElement.nativeElement
		})

		it('creates quester component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})

		describe('when changes are detected and there are coins', () => {
			let gameServiceInstance: GameService
			// let origBars: number
			// let origCoins: number

			beforeEach(() => {
				gameServiceInstance = TestBed.inject(GameService)
				gameServiceInstance.coins = 5
				gameServiceInstance.goldBars = 0
				// origBars = gameServiceInstance.goldBars
				// origCoins = gameServiceInstance.coins

				fixture.detectChanges()
			})

			it('renders start, refund, and heal buttons', () => {
				expect(compiled.querySelector('.quester-container > button.btn-start-quest').textContent).toBe('Start Quest')
				expect(compiled.querySelector('.quester-container > button.btn-start-quest').getAttributeNode('disabled')).toBeNull()

				expect(compiled.querySelector('.quester-container > button.btn-refund-minion').textContent).toBe('Refund for 75%')
				expect(compiled.querySelector('.quester-container > button.btn-refund-minion').getAttributeNode('disabled')).toBeNull()

				expect(compiled.querySelector('.quester-container > button.btn-heal-minion').textContent).toBe('Heal Minion for 3 coins and 10 XP')
				expect(compiled.querySelector('.quester-container > button.btn-heal-minion').getAttributeNode('disabled')).toBeNull()
			})

			describe('click heal button', () => {
				let spyMinionHealedEmit: jasmine.Spy

				beforeEach(() => {
					spyMinionHealedEmit = spyOn(fixture.componentInstance.minionHealed, 'emit')
					compiled.querySelector('.quester-container > button.btn-heal-minion').dispatchEvent(new Event('click'))
				})

				it('emits minionedHealed event', () => {
					expect(spyMinionHealedEmit).toHaveBeenCalledTimes(1)
				})
			})

			describe('click refund button', () => {
				let spyMinionRefundedEmit: jasmine.Spy

				beforeEach(() => {
					spyMinionRefundedEmit = spyOn(fixture.componentInstance.minionRefunded, 'emit')
					compiled.querySelector('.quester-container > button.btn-refund-minion').dispatchEvent(new Event('click'))
				})

				it('emits minionedRefunded event', () => {
					expect(spyMinionRefundedEmit).toHaveBeenCalledTimes(1)
				})
			})
		})

		describe('when changes are detected and there are no coins', () => {
			let gameServiceInstance: GameService

			beforeEach(() => {
				gameServiceInstance = TestBed.inject(GameService)
				gameServiceInstance.coins = 0
				gameServiceInstance.goldBars = 0

				fixture.detectChanges()
			})

			it('renders disabled heal button', () => {
				expect(compiled.querySelector('.quester-container > button.btn-heal-minion').textContent).toBe('Heal Minion for 3 coins and 10 XP')
				expect(compiled.querySelector('.quester-container > button.btn-heal-minion').getAttributeNode('disabled').value).toBe('')
			})

			describe('invoke onStartQuest when no timer exists', () => {
				const questMinion = new Minion(5, 5, 5, 0, 'monster a', 0)
				let spyQuestStarted: jasmine.Spy
				let timerInstance

				beforeEach(() => {
					// jest.useFakeTimers()
					spyQuestStarted = spyOn(fixture.componentInstance.questStarted, 'emit')
					fixture.componentInstance.onStartQuest(questMinion)
					fixture.detectChanges()
				})

				it('sets questTimer on quester and emits questStarted event', () => {
					timerInstance = fixture.componentInstance.questTimer
					// clearInterval(fixture.componentInstance.questTimer)
					expect(timerInstance).not.toBe(null)
					expect(timerInstance).not.toBeUndefined()
					expect(spyQuestStarted).toHaveBeenCalledTimes(1)
				})

				// describe('invoke onStartQuest again', () => {
				// 	beforeEach(() => {
				// 		fixture.componentInstance.onStartQuest(questMinion)
				// 		fixture.detectChanges()
						
				// 	})

				// 	it('does not change questTimer on quester', () => {
				// 		expect(fixture.componentInstance.questTimer).toEqual(timerInstance)
				// 	})
				// })
			})

			describe('invoke onStartQuest when timer exists', () => {
				let spyQuestStarted: jasmine.Spy

				beforeEach(() => {
					spyQuestStarted = spyOn(fixture.componentInstance.questStarted, 'emit')

					fixture.componentInstance.questTimer = {}
					fixture.componentInstance.onStartQuest(new Minion(5, 5, 5, 0, 'monster b', 0))
					fixture.detectChanges()
				})

				it('does not emit questStarted event', () => {
					expect(spyQuestStarted).not.toHaveBeenCalled()
				})
			})
		})
	})
})
