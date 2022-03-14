//import function pages
const functionPage = require("./generalFunctionPage.js");


describe('Test Project', function () {

var urlAssignedRequest = "https://www.etsy.com/";

//open login page
beforeEach(function () {
  browser.restart();
  browser.get('https://www.etsy.com/');
  
  //maximize window
  browser.driver.manage().window().maximize();
  //refresh browser
  browser.navigate().refresh();


});

//close the browser
afterEach(function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

});
it('Test Project', async function (done) {
//browser.ignoreSynchronization = true; 
  alert("HELP");
  browser.waitForAngularEnabled(false);
  browser.sleep(1000);
  

  functionPage.requiredField();
  functionPage.register("test_email@gmail.com","Test Name");
  functionPage.login();
  functionPage.search("necessary");
  functionPage.dropdowncheckbox(2);

  done();



})
})