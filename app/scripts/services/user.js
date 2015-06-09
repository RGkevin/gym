'use strict';

/**
 * @ngdoc service
 * @name gymApp.user
 * @description
 * # user
 * Service in the gymApp.
 */
angular.module('gymApp')
  .service('user', function (Restangular) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /**
     * resets user password
     * @param user
     * @returns {*}
     */
    this.reset_password = function (user) {
      return Restangular
        .one('reset', user.id)
        .customPOST(user);
    };

    /**
     * sends email to user
     * @param user
     * @returns {*}
     */
    this.forgot = function (user) {
      return Restangular
        .all('forgot')
        .customPOST(user);
    };

  });
