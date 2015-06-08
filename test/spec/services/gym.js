'use strict';

describe('Service: gym', function () {

  // load the service's module
  beforeEach(module('gymApp'));

  // instantiate service
  var gym;
  beforeEach(inject(function (_gym_) {
    gym = _gym_;
  }));

  it('should do something', function () {
    expect(!!gym).toBe(true);
  });

});
