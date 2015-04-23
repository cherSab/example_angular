'use strict';

describe('Hello World app', function() {

	describe('Main page', function() {

		beforeEach(function() {
			browser.get('app/index.html');
		});

		it('should reflect the message when typing it', function() {
			var input = element(by.css('input'));
			var text = element.all(by.css('h1')).get(1);
			input.clear();
			input.sendKeys('coucou');
			expect(text.getText()).toEqual('coucou');
		});
	});
});

