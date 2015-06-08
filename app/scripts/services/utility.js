'use strict';

/**
 * @ngdoc service
 * @name gymApp.utility
 * @description
 * # utility
 * Service in the gymApp.
 */
angular.module('gymApp')
  .provider('utility', [function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // Private variables
    var router_white_list = [];
    var router_home_path = '/';

    // private methods
    function router_pass_white_list ( route ) {
      var passed = false;
      for (var i = 0; i < router_white_list.length;
           i++
      ) {
        var white_listed_route = router_white_list[i];
        /**
         * @TODO improve test regexp
         * for now "/gym/:id" and "/gym/add" pass the test when only '/gym/add' should pass
         */
        if ( route.test( white_listed_route ) ) {
          passed = true;
          break;
        }
      }
      return passed;
    }

    // Private constructor
    function RG_utility() {

      /**
       * returns if current uer browsers is mobile
       * @returns {boolean}
       */
      this.isMobile = function () {
        return ('ontouchstart' in this.$window);
      };

      /**
       * set default validate function
       * @returns {boolean}
       */
      var auth_session = function () {
        return true;
      };
      this.set_validate_function = function (fn) {
        auth_session = fn;
      };

      this.pass_validate = function ($prev, $next) {
        var deferred = this.$q.defer();
        if ( $next.$$route && !router_pass_white_list( $next.$$route.regexp ) ) {

          console.log( 'needs to validate', $next );

          if ( auth_session() ) {
            deferred.resolve({
              type: 1,
              description: 'Route passes the auth function'
            });
          } else {
            deferred.reject({
              type: 0,
              description: 'Do not pass auth function'
            });
          }

        } else {
          deferred.resolve({
            type: 0,
            description: 'Route is in the white list'
          });
        }

        return deferred.promise;
      }
    }

    // Public API for configuration
    this.set_router_white_list = function (routes) {
      for ( var i = 0; i < routes.length; i++ ) {
        var route = routes[i];
        if ( route[0] !== '/' ) {
          route = '/' + route;
        }
        router_white_list.push(route);
      }
    };
    this.set_router_home_path = function (path) {
      router_home_path = path;
    };

    this.$get = ['$window', '$q', function ($window, $q) {
      RG_utility.prototype.$window = $window;
      RG_utility.prototype.$q = $q;

      return new RG_utility();
    }];
  }]);
