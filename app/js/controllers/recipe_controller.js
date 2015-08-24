'use stirct';

module.exports = function(app) {
	app.controller('recipeController', ['$scope', function($scope) {
		$scope.recipes = [];
		$scope.erros = [];

		//CRUD GOES HERE
	}]);
};