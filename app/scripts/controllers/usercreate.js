'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:UsercreateCtrl
 * @description
 * # UsercreateCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('UsercreateCtrl', function ($scope, gym, $routeParams, $route) {

    // user types
    $scope.types = [{
      label: 'STAFF',
      id: 2
    }, {
      label: 'Coach',
      id: 3
    }, {
      label: 'Atleta',
      id: 4
    }];

    // user info
    $scope.user = {
      name: '',
      email: '',
      profile_id: 4, // default atleta
      phone_number: ''
    };

    // submit form
    $scope.user_add = function () {
      console.log( 'log scopes', $scope.types );
      console.log( 'log scopes', $scope.user );

      gym.user_create($routeParams.id, $scope.user).then(function (response) {
        console.log( 'user saved', response );
        $route.reload();
      });

    };

  });
