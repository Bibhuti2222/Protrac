exports.config = {
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Test.js'],
    params: {
        url: 'https://www.protractortest.org'
    },
    capabilities: {
        browserName: 'chrome'
    },
    suites: { s1: 'suites1/**/*.js',
        s2: 'suites2/!**/!*.js'
    },
    directConnect:false,
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};