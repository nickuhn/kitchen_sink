'use strict';

module.exports = function(app) {
	app.directive('recipeDirective', function() {
		return {
			restict: 'AC',
			replace: true
		}
	});
};