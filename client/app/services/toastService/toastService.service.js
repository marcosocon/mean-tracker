'use strict';

angular.module('tracker2App')
	.service('toastService', function ($mdToast) {

		var self = this;

		self.openSuccessToast = function(content){
			$mdToast.show(
				$mdToast.simple()
				.textContent(content)
					.theme('success-toast')
					.position('top right')
					.hideDelay(1000)
			);
		};

		self.openErrorToast = function(content){
			$mdToast.show(
				$mdToast.simple()
				.textContent(content)
					.theme('error-toast')
					.position('top right')
					.hideDelay(1000)
			);
		};
		
	});
