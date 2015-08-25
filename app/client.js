'use strict';

require('angular/angular');

var recipeApp = angular.module('recipeApp', []);

require('./js/directives/recipe_directive.js')(recipeApp);
require('./js/controllers/recipe_controller.js')(recipeApp);
require('./js/controllers/ingredient_controller.js')(recipeApp);
