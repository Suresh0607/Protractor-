import {Config} from "protractor"

export let config: Config = {
    
    //seleniumAddress: 'http://localhost:4444/wd/hub', //direct connect
    //without adding selenium address we can add direct connect
    directConnect:true,

    capabilities: {
        'browserName': 'chrome'
       // 'browserName': 'internet explorer'
    },
   
     specs: ['testspec.js'], //instead of .ts, change it to .js as anyways this file will be convered to .js to run using protractor
     //specs: ['testspecSocket.js'],
     
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000
    }
};