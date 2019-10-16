describe('description',function () {
    it('scripts',function () {
        console.log("configuration of FrameWork");
        browser.get("https://angularjs.org/");
        browser.sleep(5000);
        browser.getCurrentUrl().then(function (url) {
            console.log("------>"+url+"<-------")
        });
    })
});