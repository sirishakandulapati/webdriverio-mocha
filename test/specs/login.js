var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    it('should have the right title - Developer Guide', function () {
        browser.url('http://webdriver.io');
        browser.click('=Developer Guide');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - Developer Guide');
    });
});
