'use strict';

angular.module('tracker2App')
  .service('modalService', function ($mdDialog) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var self = this;

	self.openReportModal = function($event){
		var parentEl = angular.element(document.body);
		$mdDialog.show({
			parent: parentEl,
			targetEvent: $event,
			reportData: null,
			templateUrl: 'components/shell/dialog/dialog.html',
			controller: 'DialogController'
		});
	};

	self.openEditReportModal = function($event, report){
		var parentEl = angular.element(document.body);

		$mdDialog.show({
			parent: parentEl,
			reportData:  report,
			targetEvent: $event,
			templateUrl: 'components/shell/dialog/dialog.html',
			controller: 'DialogController'
		});
	};
  });
