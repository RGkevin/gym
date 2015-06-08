'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('AdminCtrl', function ($scope, $routeParams, gym) {

    $scope.gym = {};
    // call for gym
    gym.get($routeParams.id).then(function (response) {
      $scope.gym = response;
      console.log( 'response', response );
    });

  });
