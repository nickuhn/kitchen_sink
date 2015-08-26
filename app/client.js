'use strict';

require('angular/angular');

var recipeApp = angular.module('recipeApp', []);

require('./js/directives/recipe_directive.js')(recipeApp);
require('./js/directives/rating_directive.js')(recipeApp);
require('./js/directives/search_form_directive.js')(recipeApp);
require('./js/directives/result_sort_directive.js')(recipeApp);
require('./js/directives/recipe_list_directive.js')(recipeApp);
require('./js/controllers/recipe_controller.js')(recipeApp);
require('./js/controllers/ingredient_controller.js')(recipeApp);
