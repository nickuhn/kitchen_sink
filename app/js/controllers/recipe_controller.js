'use strict';

module.exports = function(app) {
	app.controller('recipeController', ['$scope', '$http', function($scope, $http) {
		$scope.recipes = [];
		$scope.errors = [];
    //placeholder

    $scope.logo = '';
    $scope.text = '';
    $scope.url = '';

    $scope.active = {
      nameIsActive: true,
      ratingIsActive: false,
      cookingTimeIsActive: false
    };
    $scope.sortType = function() {
      if($scope.active.nameIsActive) {
        return "recipeName";
      }
      if($scope.active.ratingIsActive) {
        return "rating";
      }
      if($scope.active.cookingTimeIsActive) {
        return "totalTimeInSeconds";
      }
    };
    $scope.sortReverse = function() {
      if($scope.active.ratingIsActive) {
        return true;
      } else {
        return false;
      }
    }

    $scope.getRecipes = function(ingredients, outgredients) {
      var ingredientString = '';
      var outgredientString = '';
      for (var prop in ingredients) {
        if(ingredients[prop] !== '') {
          var temp = ingredients[prop].replace(' ', '%20');
          ingredientString = ingredientString + '&allowedIngredient[]=' + temp;
        }
      }

      for (var prop in outgredients) {
        if(outgredients[prop] !== '') {
          var temp = outgredients[prop].replace(' ', '%20');
        outgredientString = outgredientString + '&excludedIngredient[]=' + temp;
        }
      }
      outgredientString += '&requirePictures=true'
      var url = 'http://api.yummly.com/v1/api/recipes?_app_id=ca33a09c&_app_key=458d12f8aa1a7682b4f947c7375a93dd&q=' + ingredientString + outgredientString;
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
    };
	}]);
};
