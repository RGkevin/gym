'use strict';

/**
 * @ngdoc service
 * @name gymApp.session
 * @description
 * # session
 * Service in the gymApp.
 */
angular.module('gymApp')
  .service('session', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.login = function (user) {
      console.log( 'will login user', user );
    };
  });
