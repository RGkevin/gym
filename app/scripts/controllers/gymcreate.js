'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:GymcreateCtrl
 * @description
 * # GymcreateCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('GymCreateCtrl', ['$scope', 'gym', function ($scope, gym) {

    $scope.gym = {
      name: '',
      email: ''
    };

    $scope.createGym = function () {

      gym
        .create( $scope.gym )
        .then(function (response) {
          console.log( 'response', response );
        });

    };

  }]);
