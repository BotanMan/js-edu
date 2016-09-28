(function () {
	'use strict';

	angular
		.module('app')
		.filter('trust', Truster);

	Truster.$inject = ['$sce'];

	function Truster($sce) {
		return truster;

		function truster(str) {
			return $sce.trustAsHtml(str);
		}
	}
})();
