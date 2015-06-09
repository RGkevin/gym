'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:ForgotCtrl
 * @description
 * # ForgotCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('ForgotCtrl', function ($scope, user) {

    $scope.user = {
      email: ''
    };

    $scope.forgot = function () {
      console.log( 'user', $scope.user );
      user.forgot($scope.user).then(function (response) {
        console.log( 'response', response );
      });
    };


  });
