describe('description',function () {

    beforeEach(function () {
        console.log("Before Every IT");
    });

    xit('script-1 - Getting value from other File ', function () {
        console.log("S-1");
        var x = require('./suites1/Temp1');
        console.log(new x().abc);
    });

    xit('script-2 - Getting global values', function () {
        console.log("S-2");
        console.log(browser.params.url)
    })

    xit('script-3 - Get the Title', function () {
        console.log("S-3");
        browser.get("https://www.protractortest.org");
        browser.getTitle().then(function (title) {
            console.log(title)
        });
        // expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
        // console.log(browser.getTitle());
    })

    it('script-4 - Get url ', function () {
        console.log("S-4");
        browser.get("https://www.protractortest.org");
        browser.getCurrentUrl().then(function (url) {
            console.log(url)
        });
    })

    xit('script-5 - model Locators ', function () {
        console.log("S-5");
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//input[@ng-model='first']")).sendKeys("12");
        element(by.model("second")).sendKeys("13");
        element(by.id("gobutton")).click();
        browser.sleep(5000);
        element(by.binding("latest")).getText().then(function (bind) {
            console.log(bind);
        });
    });

    xit('script-6 - Get Attribute', function () {
        console.log("S-6");
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//input[@ng-model='first']")).sendKeys("12");
        browser.sleep(3000);
        element(by.model("first")).getAttribute("value").then(function (atr) {
            console.log(atr);
        });
        expect(element(by.model("first")).getAttribute("value")).toEqual('13');

    });

    xit('script-7 - Check Contains', function () {
        console.log("S-7");
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//input[@ng-model='first']")).sendKeys("12");
        browser.sleep(3000);
        expect(element(by.xpath("//input[@ng-model='first']")).getAttribute("value")).toContain('1');
    });

    xit('scripts-8 - Creating new Instance with same url', function () {
        console.log("configuration of FrameWork");
        browser.get("https://angularjs.org/");
        browser.sleep(5000);
        browser.forkNewDriverInstance(true);
        browser.sleep(5000);
    })


    xit('scripts-9 - Get new Instance with different Url', function () {
        console.log("configuration of FrameWork");
        browser.manage().window().maximize();
        browser.get("https://angularjs.org/");
        browser.sleep(5000);
        var bow = browser.forkNewDriverInstance();
        bow.get("https://www.protractortest.org/");
        browser.sleep(5000);
    })

    xit('scripts-10 - Non Angular Application', function () {
        browser.driver.get("https://www.google.co.in/");
        browser.sleep(5000);
    });

    xit('scripts-11 - Get instance of browser & protractor', function () {
        browser.get("https://angularjs.org/");
        browser.sleep(5000);
        console.log(browser);
        // console.log(protractor);
    });

    xit('scripts-12- All Locators', function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        element(by.css("input[ng-model='first']")).sendKeys(1);
        $("input[ng-model='second']").sendKeys(2);
        element(by.css(".btn")).click();
        $("input[ng-model='first']").sendKeys(21);
        $("[ng-model='second']").sendKeys(40);
        element(by.css("button.btn")).click();
        element(by.css("#gobutton")).getText().then(function (val) {
            console.log(val)
        });
        browser.sleep(5000);
    });

    xit('scripts-13 - Element All Locators finding Number of Element', function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        element.all().count().then(function (c1) {
            console.log(c1);
        });
        $$("tr>th").count().then(function (c2) {
            console.log(c2);
        });
    });

    xit('scripts-14 - Element All Locators ', function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        var x = element.all(by.css("tr>th"));
        x.then(function (y) {
            console.log(y);  // Array of the elements
        })
    });

    xit('scripts-15 - Element All Locators with get() method', function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        var x = element.all(by.css("tr>th"));
        for (let i = 0; i <= 2; i++) {
            x.get(i).getText().then(function (z) {
                console.log(z);
            });
        }
    });

    xit('scripts-16 - first(),last() method', function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        var x = element.all(by.css("tr>th"));
        x.first().getText().then(function (y) {
            console.log(y);
        });
        x.last().getText().then(function (z) {
            console.log(z);
        })
    });

    xit('scripts-17 - Async Behave ', function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        var x = element.all(by.xpath("//select[@ng-model='operator']/option"));
        x.count().then(function (cou) {
            for (let i = 0; i <= cou - 1; i++) {
                x.get(i).getText().then(function (z) {
                    console.log(z);
                });
            }
        });
    });

    xit('scripts-18 - ElementS inside Another Element', function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        var x = element(by.xpath("//select[@ng-model='operator']")).all(by.xpath("//option"));
        x.get(0).getText().then(function (z) {
            console.log(z);
        });
    });

    xit('scripts-19 - One Element inside Another Element', function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        var x = element(by.xpath("//select[@ng-model='operator']")).element(by.xpath("//option"));
        x.getText().then(function (z) {
            console.log(z);
        });
    });

    xit('scripts-20 - One Element inside Another Element', function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        element(by.css("input[ng-model='first']")).sendKeys(1);
        $("input[ng-model='second']").sendKeys(2);
        browser.debugger();
        element(by.css(".btn")).click();
        browser.sleep(5000);
    });

    xit('Script-21 Checking Element present or Not ', function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        var x = element(by.css("input[ng-model='first']"));
        x.isPresent().then(function (z) {
            console.log(z);
        });
        var y = element(by.css("input[ng-model='firs']"));
        y.isPresent().then(function (z) {
            console.log(z);
        });
        expect(x.isPresent()).toBeTruthy();
        // expect(y.isPresent()).toBeTruthy();
        browser.sleep(5000);
    });

    xit('Script-22 Browser Refresh', function () {
        console.log("Welcome to Protractor");
        browser.get("http://juliemr.github.io/protractor-demo/");
        console.log("Ready for Refresh");
        browser.sleep(5000);
        browser.refresh();
        browser.sleep(5000);
    });

    xit('Script-23 Pause the script', function () {
        console.log("Welcome to Protractor");
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(5000);
        browser.pause();
        element(by.css("input[ng-model='first']")).sendKeys(1);
    });

    xit('Script-24 setLocation functionality', function () {
        console.log("Welcome to Protractor");
        browser.get('http://angular.github.io/protractor/#/tutorial');
        browser.getCurrentUrl().then(function (c1) {
            console.log(c1);
        });
        browser.sleep(3000);
        browser.setLocation('api');
        browser.getCurrentUrl().then(function (c1) {
            console.log(c1);
        });
        browser.sleep(3000);
        expect(browser.getCurrentUrl()).toBe('http://www.protractortest.org/#/api');
    });

    xit('Script-25 Mouse Hover', function () {
        console.log("Welcome to Protractor");
        browser.get('https://www.protractortest.org/#/');
        browser.sleep(3000);
        browser.actions().mouseMove(element(by.xpath("//img/.."))).perform();
        browser.sleep(5000);
    });

    xit('Script-26 Mouse Hover double click', function () {
        console.log("Welcome to Protractor");
        browser.get('https://www.protractortest.org/#/');
        browser.sleep(3000);
        browser.actions().mouseMove(element(by.xpath("//img/.."))).mouseMove({x: 50, y: 0}).doubleClick().perform();
        browser.sleep(5000);
    });

    xit('Script-27 drag and drop', function () {
        console.log("Welcome to Protractor");
        browser.driver.get('https://material.angular.io/cdk/drag-drop/overview');
        // browser.sleep(3000);
        var e1 = browser.element(by.xpath("//div[text()='Drag&Drop connected sorting']/../..//div[text()='Get to work']"));
        var e2 = browser.element(by.xpath("//div[text()='Drag&Drop connected sorting']/../..//div[text()='Brush teeth']"));
        browser.actions().dragAndDrop(e1, e2).perform();

        // browser.actions().
        //     mouseDown(e1).
        //     mouseMove(e2).
        //     mouseUp().
        //     perform();

        browser.sleep(5000);
    });

    xit('Script-28 Execute Script', function () {
        console.log("Welcome to Protractor");
        browser.get('https://www.protractortest.org/#/');
        browser.sleep(3000);
        var el = element(by.xpath("//div/h2"));
        var tag = browser.executeScript('return arguments[0].tagName', el);
        tag.then(function (t) {
            console.log(t);
        });
    });

    xit('Script-29 call function', function () {
        console.log("Welcome to Protractor");
        var logText = function (el) {
            console.log("Function Got Executed")
        };
        browser.call(logText);
        browser.call(logText);
    });

    xit('Script-30 Getting the PageSource of the application', function () {
        console.log("Welcome to Protractor");
        browser.get("https://angularjs.org/");
        browser.getPageSource().then(function (ps) {
            console.log(ps)
        });
        browser.sleep(5000);
    });

    xit('Script-31 Screenshot ', function () {
        console.log("Welcome to Protractor");
        browser.get("https://angularjs.org/");
        browser.takeScreenshot().save("A.Png")
        browser.sleep(5000);
    });

    xit('Script-32 Explicit wait presenceOf method ', function () {
        console.log("Welcome to Protractor");
        browser.get("https://www.protractortest.org/#/");
        browser.wait(protractor.ExpectedConditions.presenceOf(element(by.xpath("//h3[text()='Tst Like a User']"))), 5000);
        // browser.sleep(5000);
        browser.getTitle().then(function (title) {
            console.log(title)
        });
    });

    xit('Script-33 Explicit wait stalenessOf(opposite of presence of)', function () {
        console.log("Welcome to Protractor");
        browser.get("https://www.protractortest.org/#/");
        browser.wait(protractor.ExpectedConditions.stalenessOf(element(by.xpath("//h3[text()='Test Like a User']"))), 5000);
        // browser.sleep(5000);
        browser.getTitle().then(function (title) {
            console.log(title)
        });
    });

    xit('Script-34 Explicit wait visibilityOf (Check for presence in DOM along with display with height&width should be > 0)', function () {
        console.log("Welcome to Protractor");
        browser.get("https://www.protractortest.org/#/");
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.xpath("//h3[text()='Tst Like a User']"))), 5000);
        // browser.sleep(5000);
        browser.getTitle().then(function (title) {
            console.log(title)
        });
    });

    xit('Script-35 Explicit wait invisibilityOf (Check for presence in DOM along with display with height&width should be > 0)', function () {
        console.log("Welcome to Protractor");
        browser.get("https://www.protractortest.org/#/");
        browser.wait(protractor.ExpectedConditions.invisibilityOf(element(by.xpath("//h3[text()='Test Like a User']"))), 5000);
        // browser.sleep(5000);
        browser.getTitle().then(function (title) {
            console.log(title)
        });
    });

    xit('Script-36 implicit wait ', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://www.protractortest.org/#/");
    });

    xit('Script-37 Element to Be Clickable ', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://www.protractortest.org/#/");
        protractor.ExpectedConditions.elementToBeClickable(element(by.xpath("//h3[text()='Test Like a User']")))().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.elementToBeClickable(element(by.xpath("//button")))().then(function (b) {
            console.log(b);
        });
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.xpath("//button"))), 10000);
    });

    xit('Script-38 not functionality ', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://www.protractortest.org/#/");
        protractor.ExpectedConditions.not(protractor.ExpectedConditions.titleIs('Protractor - end-to-end testing for AngularJS'))().then(function (a) {
            console.log(a);
        })

        protractor.ExpectedConditions.not(protractor.ExpectedConditions.titleIs('Pro'))().then(function (a) {
            console.log(a);
        })

    });

    xit('Script-39 and functionality', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://www.protractortest.org/#/");
        protractor.ExpectedConditions.and(protractor.ExpectedConditions.titleContains('Protractor'), protractor.ExpectedConditions.not(protractor.ExpectedConditions.titleIs('Protractor - end-to-end testing for')))().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.and(protractor.ExpectedConditions.titleContains('Practor'), protractor.ExpectedConditions.not(protractor.ExpectedConditions.titleIs('Protractor - end-to-end testing for AngularJS')))().then(function (a) {
            console.log(a);
        })
    });

    xit('Script-40 or functionality', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://www.protractortest.org/#/");
        protractor.ExpectedConditions.or(protractor.ExpectedConditions.titleContains('Protractor'), protractor.ExpectedConditions.not(protractor.ExpectedConditions.titleIs('Protractor - end-to-end testing for')))().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.or(protractor.ExpectedConditions.titleContains('Practor'), protractor.ExpectedConditions.not(protractor.ExpectedConditions.titleIs('Protractor - end-to-end testing for Angula')))().then(function (a) {
            console.log(a);
        })
    });

    xit('Script-41 Text to be present in Element', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://www.protractortest.org/#/");
        protractor.ExpectedConditions.textToBePresentInElement(browser.element(by.xpath("(//h3)[1]")), 'Test Like a User')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.textToBePresentInElement(browser.element(by.xpath("(//h3)[1]")), 'Like')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.textToBePresentInElement(browser.element(by.xpath("(//h3)[1]")), 'bvjkdvjb')().then(function (a) {
            console.log(a);
        });
    });

    xit('Script-42 Text to be present in Element value Attribute', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://angularjs.org/");
        protractor.ExpectedConditions.textToBePresentInElementValue(browser.element(by.xpath("//input[@class='btn-primary']")), 'add')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.textToBePresentInElementValue(browser.element(by.xpath("//input[@class='btn-primary']")), 'ad')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.textToBePresentInElementValue(browser.element(by.xpath("//input[@class='btn-primary']")), 'bvjkdvjb')().then(function (a) {
            console.log(a);
        });

    });

    xit('Script-43 Title Contains', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://angularjs.org/");
        protractor.ExpectedConditions.titleContains('AngularJS — Superheroic JavaScript MVW Framework')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.titleContains('cnbsdjcb')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.titleContains('Superheroic')().then(function (a) {
            console.log(a);
        });

    });

    xit('Script-44 Title Is', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://angularjs.org/");
        protractor.ExpectedConditions.titleIs('AngularJS — Superheroic JavaScript MVW Framework')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.titleIs('AngularJS')().then(function (a) {
            console.log(a);
        });

    });

    xit('Script-45 Url Contains', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://angularjs.org/");
        protractor.ExpectedConditions.urlContains('https://angularjs.org/')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.urlContains('angularjs')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.urlContains('bdv')().then(function (a) {
            console.log(a);
        });

    });

    xit('Script-46 Url Is', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://angularjs.org/");
        protractor.ExpectedConditions.urlIs('https://angularjs.org/')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.urlIs('angularjs')().then(function (a) {
            console.log(a);
        });

        protractor.ExpectedConditions.urlIs('bdv')().then(function (a) {
            console.log(a);
        });
        expect(true).toBeTruthy();
    });

    xit('Script-47 one by one iteration of values from element all method', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        element.all(by.css("tr th")).then(function (item) {
            console.log(item.length);
            for (let i = 0; i <= item.length - 1; i++) {
                item[i].getText().then(function (fun) {
                    console.log(fun);
                });
            }
        });
    });


    xit('Script-48 multiple value comparision', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        var temp = element.all(by.css('tr')).all(by.css('th'));
        // var temp=element.all(by.css('tr th'));
        expect(temp.getText()).toEqual(['Time', 'Expression', 'Result']);
        expect(temp.getText()).toEqual(['Time']);
        expect(temp.getText()).toEqual(['Result', 'Time', 'Expression']);
    });

    xit('Script-49 .toBe() method can\'t use for array comparision', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        var temp = element.all(by.css('tr th'));
        expect(['a', 'b']).toBe(['a', 'b']);
    });

    xit('Script-50 Filter Functionality', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        var temp = element.all(by.css('tr th'));
        temp.getText().then(function (a) {
            console.log(a);
        });
        console.log("Script-50");
        var z = temp.filter(function (tem) {
            return tem.getText().then(function (t) {
                console.log("then()-->" + t);
                return ((t === "Time") || (t === "Result"));
            });
        });
        z.getText().then(function (c) {
            console.log(c);
        });
    });

    xit('Script-51 locator() method', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        console.log(element(by.xpath("//tr")).locator());
        console.log(element(by.css("tr")).locator());
        console.log(element(by.className("button")).locator());
        console.log(element(by.name("button")).locator());
        console.log(element(by.id("button")).locator());
        console.log(element(by.tagName("a")).locator());
        console.log(element(by.linkText("button")).locator());
        console.log(element(by.partialLinkText("button")).locator());

    });

    xit('Script-52 each()', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        var temp = element.all(by.css('tr th'));
        temp.each(function (ele, index) {
            ele.getText().then(function (text) {
                console.log(text, index);
            });
        });
    });

    xit('Script-53 Map functionality', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        var temp = element.all(by.css('tr th'));
        var maping1 = temp.map(function (t) {
            return t.getText();
        });
        maping1.then(function (a) {
            console.log(a);
        });

        var maping2 = temp.map(function (t, ind) {
            return {
                index: ind,
                text: t.getText()
            };
        });
        maping2.then(function (a) {
            console.log(a);
        });
    });

    xit('Script-54 reduce method', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        var temp = element.all(by.css('tr th'));
        var red = temp.reduce(function (a, b) {
            return b.getText().then(function (c) {
                return a + c + '->'
            })
        }, '');
        red.then(function (a) {
            console.log(a);
        });

    });

    xit('Script-55 getWebElement method', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");

        // element(by.css('t'));
        // element(by.css('t')).getWebElement();

        // $('t');
        // $('t').getWebElement();

        // browser.driver.findElement(by.css('t'));

        // browser.findElement(by.css('t'));

    });


    xit('Script-56 $().$$()', function () {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        var eles = $('tr').$$('th');
        eles.getText().then(function (a) {
            console.log(a);
        });

    });

    xit('Script-57 isElementPresent() similar as isPresent() but this method use for sub-element present or not ', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.xpath("//tr")).isElementPresent(by.xpath("//th")).then(function (a) {
            console.log(a);
        });

        element(by.xpath("//tr")).isElementPresent(by.xpath("//t")).then(function (a) {
            console.log(a);
        });

        element(by.xpath("//t")).isElementPresent(by.xpath("//th")).then(function (a) {
            console.log(a);
        });

        // Below code not possible
        // isElementPresent(by.xpath("//tr")).then(function (a) {
        //     console.log(a);
        // });
    });

    xit('Script-58 isPresent() for sub element (similar as script-57)', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.xpath("//tr")).element(by.xpath("//th")).isPresent().then(function (a) {
            console.log(a);
        });

        element(by.xpath("//tr")).element(by.xpath("//t")).isPresent().then(function (a) {
            console.log(a);
        });

        element(by.xpath("//t")).element(by.xpath("//th")).isPresent().then(function (a) {
            console.log(a);
        });
    });


    xit('Script-59 getTagName()', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//*/th[text()='Time']")).getTagName().then(function (a) {
            console.log(a);
        })

    });

    xit('Script-60 getId() use to find unique id', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//tr/th[1]")).getId().then(function (a) {
            console.log(a);
        });
        element(by.xpath("//tr/th[2]")).getId().then(function (a) {
            console.log(a);
        });
        element(by.xpath("//tr/th[1]")).getId().then(function (a) {
            console.log(a);
        });

    });

    xit('Script-61 getSize() use to find height,width,co-ordinate', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//tr/th[1]")).getSize().then(function (a) {
            console.log(a);
        });
        element(by.xpath("//tr/th[2]")).getSize().then(function (a) {
            console.log(a);
        });
        element(by.xpath("//tr/th[3]")).getSize().then(function (a) {
            console.log(a);
        });
        element(by.xpath("//tr")).getSize().then(function (a) {
            console.log(a);
        });
    });


    xit('Script-62 getLocation() use to find height,width,co-ordinate', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("https://angularjs.org/");
        element(by.xpath("(//img)[1]")).getLocation().then(function (a) {
            console.log(a);
        });
    });

    xit('Script-63 isEnabled() use to check whether element is enable to do operation', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//input[@ng-model='first']")).isEnabled().then(function (a) {
            console.log(a);
        });

    });

    it('Script-64 () use to check whether element is enable to do operation', function() {
        console.log("Welcome to Protractor");
        browser.manage().timeouts().implicitlyWait(5000);
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.xpath("//input[@ng-model='first']")).isEnabled().then(function (a) {
            console.log(a);
        });
    });

});