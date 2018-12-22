describe('Protractor baby steps', function() {
    it('Open Angular js website', function() {
    browser.get('https://juliemr.github.io/protractor-demo/');

    element(by.model('yourName')).sendKeys('GURU99');
     var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
   expect(guru.getText()).toEqual('Hello GURU99!');
     });
   });