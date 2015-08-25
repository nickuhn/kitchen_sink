'use strict';

module.exports = function(app) {
  app.directive('starRating', function() {
    return {
      restrict: 'CA',
      replace: true,
      templateUrl: './../../../html/rating_template.html',
      scope: {
        ratingValue: '=',
      },
      link: function($scope) {
        $scope.stars = [];
        if($scope.ratingValue) {
          for (var i = 0; i < 5; i++) {
            $scope.stars.push({filled: i < $scope.ratingValue});
          }
        }
      }
    }
  });
}
