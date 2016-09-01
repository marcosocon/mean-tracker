'use strict';

angular.module('tracker2App')
  .controller('DialogController', function ($scope, $mdDialog, $http, $mdToast) {
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };


  $scope.addReport = function() {
    if(!$scope.newReport || !$scope.newReport.title || !$scope.newReport.description || !$scope.newReport.hours) {

		$mdToast.show(
			$mdToast.simple()
			.textContent('Please fill all the required fields!')
				.theme('error-toast')
				.position('top right')
				.hideDelay(1500)
		);
		return false;
	}
	$http.post('/api/reports', {title: $scope.newReport.title,
								description:$scope.newReport.description,
								hours:$scope.newReport.hours,
								created_at: new Date(),
								billable:$scope.newReport.billable}).
								then(function () {
									$mdToast.show(
										$mdToast.simple()
										.textContent('Report sucessfully added!')
											.theme('success-toast')
											.position('top right')
											.hideDelay(1500)
									);
								});
    $scope.newReport = '';
    $mdDialog.hide();
  };
});
