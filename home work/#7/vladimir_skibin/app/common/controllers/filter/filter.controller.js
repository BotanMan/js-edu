(function () {
	'use strict';

	angular
		.module('app')
		.controller('FilterController', FilterController);

	FilterController.$inject = ['$scope', '$rootScope', '$location'];

	function FilterController($scope, $rootScope, $location) {
		$scope.$watch('filterText', function(newValue, oldValue) {
			$rootScope.filterText = newValue;
		});
	}
})();
