exports.config = {
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Test_5.js'],
    capabilities: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            'args': ['--safe-mode']
        }
    }
};