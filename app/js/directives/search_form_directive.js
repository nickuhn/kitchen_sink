'use strict';

module.exports = function(app) {
  app.directive('searchForm', function() {
    return {
      restrict: 'CA',
      replace: true,
      templateUrl: './../../../html/search_form.html',
    }
  });
};
