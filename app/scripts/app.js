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
    'ngResource',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(['$routeProvider', 'RestangularProvider', 'utilityProvider', function ($routeProvider, RestangularProvider, utilityProvider) {

    /**
     * set white list of routes
     * they are routes that don't need to pass the validate function
     */
    utilityProvider.set_router_white_list(['login', 'user/reset', 'gym/add']);

    $routeProvider
      /*.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })*/
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/gym/add', {
        templateUrl: 'views/gymcreate.html',
        controller: 'GymCreateCtrl'
      })
      .when('/gym/:id', {
        templateUrl: 'views/gym.html',
        controller: 'GymCtrl'
      })
      .when('/gym/:id/classes', {
        templateUrl: 'views/classes.html',
        controller: 'ClassesCtrl'
      })
      .when('/admin/:id/classes/add', {
        templateUrl: 'views/classescreate.html',
        controller: 'ClassesCreateCtrl'
      })
      .when('/user/reset/:id', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl'
      })
      .when('/user/reset', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl'
      })
      .when('/admin/:id', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/admin/:id/user/add', {
        templateUrl: 'views/usercreate.html',
        controller: 'UsercreateCtrl'
      })
      .when('/forgot', {
        templateUrl: 'views/forgot.html',
        controller: 'ForgotCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

    // config Restangular
    RestangularProvider.setBaseUrl('https://gymapi-dev.herokuapp.com');
  }]);

/*
  rutas

  ADD GYM
  /gym/add

  login
  /login

  GYM / ADMIN HOME
  /admin/:id

 1 ADMIN
 3:58:18 PM
 2 STAFF
 3:58:20 PM
 3 COACH
 3:58:23 PM
 4 USER

  USER RESET PASS
  /user/reset

  GET CLASSES ( READ ONLY )
  /gym/:id/classes

  ADD CLASSES
  /gym/:id/classes/add

  GET EVENTS (gym user)
  /gym/:id/user/:id/events



*/
