(function() {
	'use strict';

	angular.module('tracker2App')
		.controller('ReportsCtrl', ReportsCtrl);


		function ReportsCtrl ($scope, $http, socket, $mdDialog, modalService, toastService){

			$scope.reports = [];
			
			$http.get('/api/reports').success(function(reports) {
				$scope.reports = reports;
				socket.syncUpdates('report', $scope.reports);
			});

			$scope.showConfirm = function(ev, report) {
				var confirm = $mdDialog.confirm()
				.title('Are you sure?')
				.textContent('This action cannot be undone')
				.targetEvent(ev)
				.ok('Yes')
				.cancel('Cancel');
				$mdDialog.show(confirm).then(function() {
					$scope.deleteReport(report);
				}, function() {
					return false;
				});
			};

			$scope.editReport = function($event, report){
				modalService.openEditReportModal($event, report);
			};

			$scope.deleteReport = function(report) {
				$http.delete('/api/reports/' + report._id).
				then(function () {
					toastService.openSuccessToast('Report sucessfully deleted!');
				});
			};

			$scope.$on('$destroy', function () {
				socket.unsyncUpdates('report');
			});
	}
}());
