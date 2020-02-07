import { AppPage } from './app.po'
import { browser, logging } from 'protractor'

describe('workspace-project App', () => {
	let page: AppPage

	beforeEach(() => {
		page = new AppPage()
	})

	it('should navigate w/o errors in logs', () => {
		page.navigateTo()
		// expect(page.getTitleText()).toEqual('angular-game app is running!')
	})

	afterEach(async () => {
		// Assert no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER)

		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry))
	})
})
