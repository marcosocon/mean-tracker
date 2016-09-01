'use strict';

angular.module('tracker2App')
	.controller('DialogController', function ($scope, $mdDialog, $http, $mdToast, Auth) {
		$scope.newReport = [];
		$scope.newReport.myDate = new Date();
		$scope.minDate = new Date(
			$scope.newReport.myDate.getFullYear(),
			$scope.newReport.myDate.getMonth(),
			$scope.newReport.myDate.getDate() - 2 );
		$scope.maxDate = $scope.myDate;

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
			var data = {
				title: $scope.newReport.title,
				description:$scope.newReport.description,
				date: $scope.newReport.myDate,
				hours:$scope.newReport.hours,
				created_at: new Date(),
				user_id: Auth.getCurrentUser()._id,
				billable:$scope.newReport.billable
			};

			$http.post('/api/reports', data).
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
