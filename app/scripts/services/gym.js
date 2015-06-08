'use strict';

/**
 * @ngdoc service
 * @name gymApp.gym
 * @description
 * # gym
 * Service in the gymApp.
 */
angular.module('gymApp')
  .service('gym', ['Restangular', function (Restangular) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /**
     * create a new gym and admin user
     * @param gym
     * @returns {*|{}}
     */
    this.create = function ( gym ) {
      return Restangular
        .all('gym')
        .post( gym );
    };

    /**
     * get one gym
     * @param id
     * @returns {*}
     */
    this.get = function (id) {
      return Restangular
        .one('gym', id)
        .get();
    };

    /**
     * add user to a gym
     * @param gym
     * @param user
     * @returns {*}
     */
    this.user_create = function (gym, user) {
      return Restangular
        .one('gym', gym)
        .all('adduser')
        .customPOST(user);
    };
  }]);
