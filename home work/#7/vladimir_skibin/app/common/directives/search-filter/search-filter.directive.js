(function () {
	'use strict';

	angular
		.module('app')
		.directive('searchFilter', searchFilter);

	function searchFilter() {
		var directive = {
			controller: 'FilterController',
			restrict: 'EA',
			templateUrl: 'app/common/directives/search-filter/search-filter.html',
			replace: true
		};

		return directive;
	}
})();
