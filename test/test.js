const assert = require('assert');

describe('Page opening', function () {

    it('get title', function(){
        browser.url('/'); //open baseUrl + string passed in .url() function
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        assert.equal(title, 'Bug Tracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })

    it('get header title', function(){
        let title1 = browser.getText('.custom-header span');
        console.log(title1);
        assert.equal(title1, 'BugTracker', 'Title1 is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    });

    it('reg Button', function(){
        browser.click('#registration');
        // let myButton = $('.mt-0');
        // myButton.click();
        let regButton = browser.waitForEnabled('#fname', 10000);
        assert.equal(regButton, true, 'Registration button is not working'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    });
});