exports.config = {
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Test_POM.js'],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect:false,
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};