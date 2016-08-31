'use strict';

describe('Controller: ReportsCtrl', function () {

  // load the controller's module
  beforeEach(module('tracker2App'));
  beforeEach(module('socketMock'));

  var ReportsCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/reports')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ReportsCtrl = $controller('ReportsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of reports to the scope', function () {
    $httpBackend.flush();
    expect(scope.reports.length).toBe(4);
  });
});
