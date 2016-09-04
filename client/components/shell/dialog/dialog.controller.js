'use strict';

angular.module('tracker2App')
	.controller('DialogController', function ($scope, $mdDialog, $http, Auth, reportData ,toastService) {
		$scope.newReport = [];
		if (reportData) {
			$scope.newReport = reportData;
		} else {
			$scope.newReport = [];
		}
		if (!$scope.newReport._id) {
			$scope.save = true;
		} else {
			$scope.save = false;
		}


		$scope.newReport.myDate = new Date();
		$scope.minDate = new Date(
			$scope.newReport.myDate.getFullYear(),
			$scope.newReport.myDate.getMonth(),
			$scope.newReport.myDate.getDate() - 2 );
		$scope.maxDate = $scope.myDate;

		$scope.closeDialog = function() {
			$mdDialog.hide();
		};


		$scope.addReport = function(save) {
			if(!$scope.newReport || !$scope.newReport.title || !$scope.newReport.description || !$scope.newReport.hours) {
				toastService.openErrorToast('Please fill all the required fields!');
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

			if (save) {
				$http.post('/api/reports', data).
					then(function () {
						toastService.openSuccessToast('Report sucessfully added!');
					});
			} else {
				data._id = $scope.newReport._id;
				$http.put('/api/reports/' + data._id, data).
					then(function () {
						toastService.openSuccessToast('Report sucessfully updated!');
					});
			}
			$scope.newReport = '';
			$mdDialog.hide();
		};
	});
