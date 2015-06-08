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
      token_key: 'session'
    };

    /**
     * Save session token in cookies
     * @param token
     */
    function save_session_token (token) {
      $cookieStore.put(session.token_key, token);
    }

    /**
     * store given token in a local variable
     * @param token
     */
    this.store_session_token = function (token) {
      session.token = token;
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
          }
          self.store_session_token(response.session_key || '');
          deferred.resolve(response);
        }, function (reason) {
          deferred.reject(reason);
        });

      return deferred.promise;

    };
  }]);
