(function() {
	'use strict';

	angular.module('tracker2App')
		.controller('ReportsCtrl', ReportsCtrl);


		function ReportsCtrl ($scope, $http, socket, $mdToast, $mdDialog){
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

			$scope.deleteReport = function(report) {
				$http.delete('/api/reports/' + report._id).
				then(function () {
					$mdToast.show(
						$mdToast.simple()
						.textContent('Report sucessfully deleted!')
							.theme('success-toast')
							.position('top right')
							.hideDelay(1000)
					);
				});
			};

			$scope.$on('$destroy', function () {
				socket.unsyncUpdates('report');
			});
	}
}());
