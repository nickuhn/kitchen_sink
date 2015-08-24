'use strict';

require('angular/angular');

var recipeApp = angular.module('recipeApp', ['services', 'directives']);

require('./directives/recipe_directive.js')(recipeApp);
require('./controllers/recipe_controller.js')(recipeApp);