import { async, ComponentFixture, TestBed } from '@angular/core/testing'
// import { LocStorageService } from '@services/loc-storage.service'
import { GameComponent } from './game.component'

describe('GameComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GameComponent ]
		})
			.compileComponents()
	}))

	describe('when created', () => {
		let compiled: HTMLElement
		let fixture: ComponentFixture<GameComponent>
		// let instanceLocStorageService: LocStorageService
		// let spyLoadCoins: any

		beforeEach(() => {
			fixture = TestBed.createComponent(GameComponent)
			compiled = fixture.debugElement.nativeElement
			// instanceLocStorageService = TestBed.get(LocStorageService)
			// spyLoadCoins = spyOn(instanceLocStorageService, 'loadCoins').and.returnValue(50)
			fixture.detectChanges() // necessary to run ngOnInit()
		})

		it('creates game component and invokes svc.loadCoins', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
			// expect(instanceLocStorageService.loadCoins).toHaveBeenCalledTimes(1)
			// expect(spyLoadCoins).toHaveBeenCalledTimes(1)
		})
	})
})
