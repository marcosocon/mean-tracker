'use strict';

describe('Service: toastService', function () {

  // load the service's module
  beforeEach(module('tracker2App'));

  // instantiate service
  var toastService;
  beforeEach(inject(function (_toastService_) {
    toastService = _toastService_;
  }));

  it('should do something', function () {
    expect(!!toastService).toBe(true);
  });

});
