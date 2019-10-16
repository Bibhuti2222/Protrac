exports.config = {
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            'args': ['--safe-mode']
        }
    },
    multiCapabilities: [{
        'browserName': 'firefox',
        specs: ['Test_6.js']
    }, {
        'browserName': 'chrome',
        specs: ['Test_7.js'],
    }]
};