'use strict';

angular.module('tracker2App')
  .controller('DialogController', function ($scope, $mdDialog, $http, $mdToast) {
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };


  $scope.addReport = function() {
    if($scope.newReport === '') {
      return;
    }
    $http.post('/api/reports', {title: $scope.newReport.title,
								description:$scope.newReport.description,
								hours:$scope.newReport.hours,
								created_at: new Date(),
								billable:$scope.newReport.billable}).
								then(function () {
									$mdToast.show({
										template: '<md-toast>' +
										'<div class="md-toast-content">' +
										'Report sucessfully added.' +
										'</div>' +
										'</md-toast>',
										position: 'top right',
										hideDelay: 1500
									});
								});
    $scope.newReport = '';
    $mdDialog.hide();
  };
});
