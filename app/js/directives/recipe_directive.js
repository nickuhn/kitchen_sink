'use strict';

module.exports = function(app) {
	app.directive('recipeDetails', function() {
		return {
			restict: 'AC',
			replace: true,
			templateUrl: './html/recipe_detail.html',
			scope: {
				ingredients: '='
			}
		}
	});
};
