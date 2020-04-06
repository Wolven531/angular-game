import { Minion } from './minion.model'

describe('Minion', () => {
	describe('when model created w/o params', () => {
		let fixture: Minion

		beforeEach(() => {
			fixture = new Minion()
		})

		it('creates minion model w/ default values', () => {
			expect(fixture.attack).toBeLessThanOrEqual(Minion.MAX_ATTACK)
			expect(fixture.attack).toBeGreaterThanOrEqual(Minion.MIN_ATTACK)
			expect(fixture.defense).toBeLessThanOrEqual(Minion.MAX_DEFENSE)
			expect(fixture.defense).toBeGreaterThanOrEqual(Minion.MIN_DEFENSE)
			expect(fixture.hitpoints).toBeLessThanOrEqual(Minion.MAX_HITPOINTS)
			expect(fixture.hitpoints).toBeGreaterThanOrEqual(Minion.MIN_HITPOINTS)
			expect(fixture.name).toBe('')
			expect(fixture.xp).toBe(0)
			expect(fixture.hasTakenDamage).toBe(false)
			expect(fixture.hitpointsRemaining).toBe(fixture.hitpoints)
		})
	})

	describe('when model created using params', () => {
		let fixture: Minion

		beforeEach(() => {
			fixture = new Minion(5, 4, 3, 2, 'name1', 1)
		})

		it('creates minion model w/ provided values', () => {
			expect(fixture.attack).toBe(5)
			expect(fixture.defense).toBe(4)
			expect(fixture.hitpoints).toBe(3)
			expect(fixture.name).toBe('name1')
			expect(fixture.xp).toBe(1)
			expect(fixture.hasTakenDamage).toBe(true)
			expect(fixture.hitpointsRemaining).toBe(1)
		})

		describe('invoke addXp', () => {
			beforeEach(() => {
				fixture.addXp(17)
			})

			it('updates xp property', () => {
				expect(fixture.xp).toBe(18)
			})

			describe('invoke spendXp', () => {
				beforeEach(() => {
					fixture.spendXp(7)
				})

				it('updates xp property', () => {
					expect(fixture.xp).toBe(11)
				})
			})
		})
	})
})
