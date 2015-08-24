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
      var url = 'http://api.yummly.com/v1/api/recipes?_app_id=ca33a09c&_app_key=458d12f8aa1a7682b4f947c7375a93dd&q=' + ingredientString;
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
