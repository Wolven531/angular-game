import { Location } from '@angular/common'
import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { routes } from './app-routing.module'

import { AppComponent } from './app.component'
import { GameComponent } from '../game/game.component'
import { ShopComponent } from '../shop/shop.component'
import { WelcomeComponent } from '../welcome/welcome.component'

describe('AppComponent', () => {
	let location: Location
	let router: Router

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					GameComponent,
					ShopComponent,
					WelcomeComponent,
					AppComponent
				],
				imports: [
					RouterTestingModule.withRoutes(routes)
				]
			}).compileComponents()

			location = TestBed.get(Location)
			router = TestBed.get(Router)
		})
	)

	describe('when created', () => {
		let compiled: HTMLElement
		let fixture: ComponentFixture<AppComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(AppComponent)
			router.initialNavigation()
			compiled = fixture.debugElement.nativeElement
		})

		it('creates app component', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
		})

		describe('navigation to ""', () => {
			beforeEach(
				async(() => {
					router.navigate([''])
				})
			)

			it('redirects to "/welcome"', () => {
				expect(location.path()).toBe('/welcome')
			})
		})
	})
})
