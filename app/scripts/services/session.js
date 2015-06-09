'use strict';

/**
 * @ngdoc service
 * @name gymApp.session
 * @description
 * # session
 * Service in the gymApp.
 */
angular.module('gymApp')
  .service('session', ['Restangular', '$cookieStore', '$q', function (Restangular, $cookieStore, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var session = {
      token: null,
      profile_id: null,
      token_key: 'session',
      profile_key: 'profile'
    };

    /**
     * Save session token in cookies
     * @param token
     */
    function save_session_token (token) {
      $cookieStore.put(session.token_key, token);
    }

    /**
     * Save the profile ID
     * 1 ADMIN
     * 2 STAFF
     * 3 COACH
     * 4 USER
     * @param id
     */
    function save_profile_id (id) {
      $cookieStore.put(session.profile_key, id);
    }

    /**
     * store given token in a local variable
     * @param token
     */
    this.store_session_token = function (token) {
      session.token = token;
    };

    /**
     * save profile id
     * @param id
     */
    this.store_profile_id = function (id) {
      session.profile_id = id;
    };

    /**
     * return session token
     * null if it doesn't exists
     * @returns {*}
     */
    this.get_session_token = function () {
      if (session.token) {
        return session.token;
      } else if ( $cookieStore.get(session.token_key) ) {
        return $cookieStore.get(session.token_key);
      } else {
        return null;
      }
    };

    /**
     * return profile id
     * @returns {*}
     */
    this.get_profile_id = function () {
      if ( session.profile_id ) {
        return session.profile_id;
      } else if ( $cookieStore.get(session.profile_key) ) {
        return $cookieStore.get(session.profile_key);
      } else {
        return 0;
      }
    };

    /**
     * Login user  and save session token
     * @param user
     * @param remember
     * @returns {*}
     */
    this.login = function (user, remember) {
      var deferred = $q.defer();
      var self = this;

      Restangular
        .all('login')
        .post(user)
        .then(function (response) {

          if ( remember ) {
            save_session_token(response.session_key || '');
            save_profile_id(response.profile_id);
          }
          self.store_session_token(response.session_key || '');
          self.store_profile_id(response.profile_id);
          deferred.resolve(response);
        }, function (reason) {
          deferred.reject(reason);
        });

      return deferred.promise;

    };
  }]);
