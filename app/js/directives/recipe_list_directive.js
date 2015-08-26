'use strict';

module.exports = function(app) {
  app.directive('recipeList', function() {
    return {
      restrict: 'CA',
      replace: true,
      templateUrl: './../../../html/recipe_list.html',
    }
  });
};
