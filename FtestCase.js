describe("Super Calculator", function(){
    
    var obj = require("./jsobject.js");
    it('Addition',function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
         obj.fobj.sendKeys('7');
            browser.sleep(2000);
        obj.sobj.sendKeys('11');
            browser.sleep(2000);
        obj.cobj.click();
            browser.sleep(2000);
        //expect(obj.robj.getText()).toBe("18");
        //    browser.sleep(2000);
        obj.robj.getText().then(function(text){
            console.log(text);    
            browser.sleep(2000);
            browser.close;
        })
    });
});