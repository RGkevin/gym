'use strict';

describe('Service: utility', function () {

  // load the service's module
  beforeEach(module('gymApp'));

  // instantiate service
  var utility;
  beforeEach(inject(function (_utility_) {
    utility = _utility_;
  }));

  it('should do something', function () {
    expect(!!utility).toBe(true);
  });

});
