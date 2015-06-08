'use strict';

describe('Directive: rgDatePicker', function () {

  // load the directive's module
  beforeEach(module('gymApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rg-date-picker></rg-date-picker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rgDatePicker directive');
  }));
});
