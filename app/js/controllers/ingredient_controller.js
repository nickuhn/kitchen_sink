'use strict';

module.exports = function(app) {
	app.controller('ingredientController', ['$scope', '$http', function($scope, $http) {
		$scope.ingredients = [];
		$scope.isOpen = false;
		$scope.sourceUrl = '';

		$scope.getDirections = function(id) {
      var url = 'https://api.yummly.com/v1/api/recipe/' + id + '?_app_id=ca33a09c&_app_key=458d12f8aa1a7682b4f947c7375a93dd&q';
      if(!$scope.isOpen) {
       	$http.get(url)
        .then(function(res) {
          $scope.ingredients = res.data.ingredientLines;
          $scope.sourceUrl = res.data.source.sourceRecipeUrl;
          $scope.isOpen = true;
        });
      } else {
      	$scope.isOpen = false;
      }
    };
	}]);
};
