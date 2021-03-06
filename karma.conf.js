/* global __dirname, require */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		autoWatch: true,
		basePath: '',
		browsers: ['Chrome'],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		colors: true,
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, './coverage/angular-game'),
			fixWebpackSourcePaths: true,
			reports: ['html', 'lcovonly', 'text-summary'],
			thresholds: {
				branches: 85,
				functions: 95,
				lines: 85,
				statements: 85
			}
		},
		customLaunchers: {
			ChromeHeadlessCustom: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox', '--disable-gpu']
			}
		},
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		logLevel: config.LOG_INFO,
		// phantomjsLauncher: {
		// 	// Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
		// 	exitOnResourceError: true
		// },
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			// require('karma-phantomjs-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		port: 9876,
		reporters: ['progress', 'kjhtml'],
		restartOnFileChange: true,
		singleRun: false
	})
}
