/**
 * Created by kevinlopez on 5/26/15.
 */
angular
  .module('gymApp')
  .run(['$rootScope', function ($rootScope) {

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
      var _ctrl = next.controller || next.$$route.controller || 'NotCtrl';
      _ctrl = _ctrl.split(/(?=[A-Z])/).join('_').toLowerCase();

      $rootScope.controller_name = _ctrl;

    });

  }]);
