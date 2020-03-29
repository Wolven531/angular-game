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
			expect(fixture.hitpoints).toBe(fixture.hitpointsRemaining)
		})
	})
})
