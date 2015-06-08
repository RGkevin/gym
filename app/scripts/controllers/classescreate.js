'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:ClassescreateCtrl
 * @description
 * # ClassescreateCtrl
 * Controller of the gymApp
 */
angular.module('gymApp')
  .controller('ClassesCreateCtrl', function ($scope) {

    $scope.classes = {
      "name" : "",
      "description" : "",
      "subscribers_limit" : 18,
      "days" : [
        {
          "day" : 1,
          "hours" : [
            {
              "coach" : 1,
              "hour" : 8
            },
            {
              "coach" : 1,
              "hour" : 9
            }
          ]
        },
        {
          "day" : 2,
          "hours" : [
            {
              "coach" : 1,
              "hour" : 10
            },
            {
              "coach" : 1,
              "hour" : 11
            }
          ]
        }
      ]
    };

  });
