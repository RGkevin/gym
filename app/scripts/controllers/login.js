'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('LoginCtrl', ['$scope', 'session', function ($scope, session) {

    // data handler
    $scope.user = {
      name: '',
      password: ''
    };

    $scope.submit_login = function () {

      session.login($scope.user);

    };
  }]);
