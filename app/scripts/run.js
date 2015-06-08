/**
 * Created by kevinlopez on 5/26/15.
 */
angular
  .module('gymApp')
  .run(['$rootScope', 'utility', 'session', function ($rootScope, utility, session) {

    /**
     * Handle routes
     */
    // define auth function
    var auth_fn = function () {
      // @TODO convert this to a promise that will test the session token with an API service
      return session.get_session_token() ? true : false;
    };
    // set auth function
    utility.set_validate_function(auth_fn);
    // helper scope value
    $rootScope.rg_router_is_wl = false;
    $rootScope.$on('$routeChangeStart', function (prev, next) {
      // check routes
      utility.pass_validate(prev, next).then(function (response) {
        console.log( 'pass the validate', response );
        $rootScope.rg_router_is_wl = (response.type == 1 );
      }, function (reason) {
        $rootScope.rg_router_is_wl = true;
        console.log( 'reason', reason );
      });
    });


    /**
     * Handler for route class name
     * @type {string}
     */
    $rootScope.controller_name = '';
    /**
     * Set class name depends of each route controller
     */
    $rootScope.$on('$routeChangeSuccess', function (prev, next) {

      // parse controller name
      var _ctrl = next.controller || (next.$$route ? next.$$route.controller : 'NotCtrl');
      _ctrl = _ctrl.split(/(?=[A-Z])/).join('_').toLowerCase();

      $rootScope.controller_name = _ctrl;

    });

  }]);
