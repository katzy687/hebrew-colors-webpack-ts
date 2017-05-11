import * as angular from "angular";
import * as uiRouter from 'angular-ui-router';

import * as ngAnimate from 'angular-animate';
import * as ngMaterial from 'angular-material';
import 'normalize.css';
import 'animate.css';
import 'angular-material/angular-material.css';

import ColorService from './services/ColorService';

export const appModule = angular.module("app", [
  uiRouter,
  require('angular-aria'),
  ngAnimate,
  ngMaterial
])

.factory('ColorService', ColorService);


// UI-Routing
appModule.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  	.state('home', {
  		url: '/',
  		template: '<home></home>'
  	})
  	.state('practice', {
  		url: '/practice',
  		template: '<practice></practice>'
  	});
}]);
