'use strict';

module.exports = function(app) {
	app.controller('recipeController', ['$scope', '$http', function($scope, $http) {
		$scope.recipes = [];
		$scope.errors = [];
    $scope.logo = '';
    $scope.text = '';
    $scope.url = '';


    $scope.getRecipes = function(ingredients) {
      var APIKEY = 'b42730b75912919136b1fcc58fec5b5c'
      var ingredientString = '';
      for (var prop in ingredients) {
        var temp = ingredients[prop].replace(' ', '%20');
        ingredientString = ingredientString + '&allowedIngredient[]=' + temp;
      }
      ingredientString += '&requirePictures=true'
      var url = 'http://api.yummly.com/v1/api/recipes?_app_id=ca33a09c&_app_key=458d12f8aa1a7682b4f947c7375a93dd&q=' + ingredientString;
      console.log(url);
      $http.get(url)
        .then(function(res) {
          console.log('success', res);
          $scope.recipes = res.data.matches;
          $scope.logo = res.data.attribution.logo;
          $scope.text = res.data.attribution.text;
          $scope.url  = res.data.attribution.url;
  
        },
        function(res) {
          console.log('error', res);
          $scope.errors.push(res);
        })
    }
	}]);
};
