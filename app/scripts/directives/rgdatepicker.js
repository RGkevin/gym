'use strict';

/**
 * @ngdoc directive
 * @name gymApp.directive:rgDatePicker
 * @description
 * # rgDatePicker
 */
angular.module('gymApp')
  .directive('rgDatePicker', ['$window', 'utility', '$filter', function ($window, utility, $filter) {
    return {
      //template: '<div></div>',
      restrict: 'EA',
      scope: {
        date: '=rgDatePicker'
      },
      link: function postLink(scope, element, attrs) {

        var
          options = {
            format: 'DD/MM/YYYY'
            /*weekstart	: '',
            i18n	: '',
            format	:'',
            offsettop	: '',
            minDate	:'',
            maxDate : '',
            pos: ''*/
          },
          now = new Date(),
          today = $filter('date')( now, 'yyyy-MM-dd'),
          $datepicker = null;

        if ( utility.isMobile() ) {
          // change input type to date
          element.attr('type', 'date');
          element[0].valueAsDate = now;
          scope.date = today;

          console.log( 'today', today );

          // set date value every time it changes
          element.on('change', function () {
            scope.date = element.val();
            scope.$apply();
          });
        } else {
          // init datepicker
          $datepicker = new $window.UIkit.datepicker( element[0], options );
        }

        scope.date = new Date();

        console.log( 'picker', $datepicker );
        //element.text('this is the rgDatePicker directive');
      }
    };
  }]);
