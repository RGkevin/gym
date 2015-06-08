'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:GymCtrl
 * @description
 * # GymCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('GymCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    // data handler
    $scope.classes = {
      date: ''
    };

    console.log( 'params', $routeParams );
  }]);
