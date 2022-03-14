// conf.js
var Jasmine2HtmlCliReporter = require('protractor-jasmine2-html-cli-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
   specs: [
  'functionPage.js'
  ],
  
  // multiple browsers
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },
  

}
  

