'use strict';

module.exports = function(app) {
  app.directive('resultSort', function() {
    return {
      restrict: 'CA',
      replace: true,
      templateUrl: './../../../html/result_sort.html',
    }
  });
};
