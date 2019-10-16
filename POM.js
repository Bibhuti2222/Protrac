var ProtractorElements=function () {

var first=element(by.xpath("//input[@ng-model='first']"));
var second=element(by.model("second"));
var button=element(by.id("gobutton"));
var expected=element(by.xpath("//h2"));
    this.get=function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
    };

    this.sendInfo=function () {
        first.sendKeys("12");
        second.sendKeys("13");
        button.click();
        browser.sleep(5000);
    };

    this.verification=function () {
        expect(expected.getText()).toEqual("25");
    }

};
module.exports=new ProtractorElements();