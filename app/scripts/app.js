'use strict';

/**
 * @ngdoc overview
 * @name gymApp
 * @description
 * # gymApp
 *
 * Main module of the application.
 */
angular
  .module('gymApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'Restangular'
  ])
  .config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // config restangular
    RestangularProvider.setBaseUrl('http://foobar.com');
  }]);
