import { Location } from '@angular/common'
import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { routes as gameRoutes } from '../game/game.module'
import { routes as shopRoutes } from '../shop/shop.module'
import { routes as appRoutes } from './app-routing.module'

import { GameComponent } from '../game/game.component'
import { ShopComponent } from '../shop/shop.component'
import { WelcomeComponent } from '../welcome/welcome.component'
import { AppComponent } from './app.component'

const URL_BLANK = ''
const URL_GAME = 'game'
const URL_SHOP = 'shop'
const URL_WELCOME = 'welcome'

describe('AppComponent w/ Routing', () => {
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
					RouterTestingModule.withRoutes(
						// appRoutes must come last due to wildcard route
						gameRoutes
							.concat(shopRoutes)
							.concat(appRoutes)
					)
				]
			}).compileComponents()

			location = TestBed.get(Location)
			router = TestBed.get(Router)
		})
	)

	describe('when created and initialNavigation() is invoked', () => {
		let fixture: ComponentFixture<AppComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(AppComponent)
			router.initialNavigation()
		})

		it('creates app component and navigates to ""', () => {
			expect(fixture.debugElement.componentInstance).toBeTruthy()
			expect(location.path()).toBe(URL_BLANK)
		})

		describe('navigation to ""', () => {
			beforeEach(
				async(() => {
					router.navigate([URL_BLANK])
				})
			)

			it('redirects to "/welcome"', () => {
				expect(location.path()).toBe('/welcome')
			})
		})

		describe('navigation to "/welcome"', () => {
			beforeEach(
				async(() => {
					router.navigate([URL_WELCOME])
				})
			)

			it('navigates to "/welcome"', () => {
				expect(location.path()).toBe('/welcome')
			})
		})

		describe('navigation to "/game"', () => {
			beforeEach(
				async(() => {
					router.navigate([URL_GAME])
				})
			)

			it('navigates to "/game"', () => {
				expect(location.path()).toBe('/game')
			})
		})

		describe('navigation to "/shop"', () => {
			beforeEach(
				async(() => {
					router.navigate([URL_SHOP])
				})
			)

			it('navigates to "/shop"', () => {
				expect(location.path()).toBe('/shop')
			})
		})
	})
})
