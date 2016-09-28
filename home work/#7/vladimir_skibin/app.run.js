(function () {
	"use strict";

	angular
		.module('app')
		.run(runStage);

	runStage.$inject = ['$rootScope'];

	function runStage($rootScope) {
		$rootScope.filterText = '';
	}
})();
