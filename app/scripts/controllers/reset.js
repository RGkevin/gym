'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:ResetCtrl
 * @description
 * # ResetCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('ResetCtrl', function ($scope, $routeParams, user) {
    $scope.user = {
      email: '',
      password: '',
      id: $routeParams.id || 0
    };

    $scope.reset = function () {
      user.reset_password($scope.user).then(function (response) {
        console.log( 'response', response );
      });
    };

  });
