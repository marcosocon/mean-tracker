(function() {
	'use strict';

	angular.module('tracker2App')
		.controller('ReportsCtrl', ReportsCtrl);


		function ReportsCtrl ($scope, $http, socket, $mdToast){
			$scope.reports = [];
			$http.get('/api/reports').success(function(reports) {
				$scope.reports = reports;
				socket.syncUpdates('report', $scope.reports);
			});

			$scope.getColor = function($index) {
				var _d = ($index + 1) % 11;
				var bg = '';

				switch(_d) {
					case 1:       bg = 'red';         break;
					case 2:       bg = 'green';       break;
					case 3:       bg = 'darkBlue';    break;
					case 4:       bg = 'blue';        break;
					case 5:       bg = 'yellow';      break;
					case 6:       bg = 'pink';        break;
					case 7:       bg = 'darkBlue';    break;
					case 8:       bg = 'purple';      break;
					case 9:       bg = 'deepBlue';    break;
					case 10:      bg = 'lightPurple'; break;
					default:      bg = 'yellow';      break;
				}

				return bg;
			};

			$scope.getSpan = function($index) {
				var _d = ($index + 1) % 11;

				if (_d === 1 || _d === 5) {
					return 2;
				}
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
