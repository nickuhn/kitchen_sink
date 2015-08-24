'use strict';

module.exports = function(app) {
	app.controller('recipeController', ['$scope', '$http', function($scope, $http) {
		$scope.recipes = [];
		$scope.errors = [];

    $scope.getRecipes = function(ingredients) {
      var ingredientString = '';
      var APIKEY = 'd148c8da9c3ac06a293e1300968ee4b3'
      var ingredientString = '';
      for (var prop in ingredients) {
        var temp = ingredients[prop].replace(' ', '%20');
        ingredientString = ingredientString + ',' + temp;
      }
      var url = 'http://food2fork.com/api/search?key=' + APIKEY + '&q=' + ingredientString;
      $http.get(url)
        .then(function(res) {
          console.log('success', res);
          $scope.recipes = res.data.recipes;
        },
        function(res) {
          console.log('error', res);
          $scope.errors.push(res);
        })
    }
	}]);
};
