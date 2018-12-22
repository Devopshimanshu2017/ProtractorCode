describe("Super Calculator", function(){
    it('Addition',function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        
         element(by.model('first')).sendKeys('6');
            browser.sleep(3000);
        element(by.model('second')).sendKeys('10');
            browser.sleep(3000);

        element(by.id('gobutton')).click();
            browser.sleep(3000);


            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("16");
            browser.sleep(3000);
    

        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log(text);    
            browser.sleep(3000);
        })
       
    });
});