'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('LoginCtrl', ['$scope', 'session', '$location', function ($scope, session, $location) {

    // data handler
    $scope.user = {
      email: '',
      password: '',
      remember: true
    };

    $scope.submit_login = function () {

      session.login($scope.user, $scope.user.remember).then(function (response) {
        console.log( 'response', response );

        // check if logged user is an Admin
        if ( response.profile_id == 1 ) {
          // go to admin home page
          $location.path( 'admin/' + response.gym_id );
        } else {
          // go to user home page
        }

      });


    };
  }]);
