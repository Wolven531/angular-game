import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MinionComponent } from './minion.component'
// import { GameService } from '@services/game.service'
// import { LocStorageService } from '@services/loc-storage.service'
// import { NameGeneratorService } from '@services/name-gen.service'
// import { LoggerService } from '@services/logger.service'

describe('MinionComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MinionComponent ],
			providers: [
				// new GameService(
				// 	TestBed.inject(LocStorageService),
				// 	TestBed.inject(LoggerService),
				// 	TestBed.inject(NameGeneratorService)
				// ),
				// { provide: LocStorageService, useClass: LocStorageService },
				// { provide: LoggerService, useClass: LoggerService },
				// { provide: NameGeneratorService, useClass: NameGeneratorService },
				// { provide: GameService, useClass: GameService },
			]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		// let compiled: HTMLElement
		let fixture: ComponentFixture<MinionComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(MinionComponent)
			// compiled = fixture.debugElement.nativeElement
		})

		it('creates minion component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})
	})
})
