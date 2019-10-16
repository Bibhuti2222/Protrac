exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Test_3.js'],
    suites: { s1: 'suites1/**/*.js',
        s2: 'suites2/**/*.js'
    }
};