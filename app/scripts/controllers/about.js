'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
