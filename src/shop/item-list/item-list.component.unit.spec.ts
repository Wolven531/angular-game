import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ItemListComponent } from './item-list.component'

describe('ItemListComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ItemListComponent ]
		})
		.compileComponents()
	}))

	describe('when created', () => {
		let component: ItemListComponent
		let fixture: ComponentFixture<ItemListComponent>

		beforeEach(() => {
			fixture = TestBed.createComponent(ItemListComponent)
			component = fixture.componentInstance
			// fixture.detectChanges() // only required when component class updates template
		})

		it('creates item list component', () => {
			expect(component).toBeTruthy()
		})
	})
})
