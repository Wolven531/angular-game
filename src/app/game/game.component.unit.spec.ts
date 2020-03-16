import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { GameService } from '@services/game.service'
import { LoggerService } from '@services/logger.service'
import { GameComponent } from './game.component'

describe('GameComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GameComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		// let compiled: HTMLElement
		let fixture: ComponentFixture<GameComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(GameComponent)
			// compiled = fixture.debugElement.nativeElement
			fixture.detectChanges() // necessary to run ngOnInit()
		})

		it('creates game component and invokes svc.loadCoins', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})

		describe('when onClearLogs is invoked', () => {
			let instanceLoggerService: LoggerService
			let spyClearLogs: jasmine.Spy
	
			beforeEach(() => {
				// instanceLoggerService = TestBed.get(LoggerService)
				instanceLoggerService = fixture.debugElement.injector.get(LoggerService)
				spyClearLogs = spyOn(instanceLoggerService, 'clearLogs')
				fixture.componentInstance.onClearLogs()
				fixture.detectChanges()
			})
	
			it('invokes clearLogs in LoggerService', () => {
				expect(spyClearLogs).toHaveBeenCalledTimes(1)
			})
		})

		describe('when onGenerateCoin is invoked', () => {
			let gameService: GameService
			let spyGenerateCoin: jasmine.Spy
	
			beforeEach(() => {
				gameService = fixture.debugElement.injector.get(GameService)
				spyGenerateCoin = spyOn(gameService, 'generateCoin')
				fixture.componentInstance.onGenerateCoin()
				fixture.detectChanges()
			})
	
			it('invokes generateCoin in GameService', () => {
				expect(spyGenerateCoin).toHaveBeenCalledTimes(1)
			})
		})
	})
})
