'use strict';

/**
 * @ngdoc overview
 * @name abrdemo1App
 * @description
 * # abrdemo1App
 *
 * Main module of the application.
 */
angular.module('abrdemo1App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'highcharts-ng'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/yoy', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
	  .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/yoy'
      });
  });
