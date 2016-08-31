'use strict';

angular.module('tracker2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/report/index.html',
        controller: 'ReportsCtrl'
      });
  });
