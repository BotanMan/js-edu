(function () {
	'use strict';

	angular
		.module('app')
		.filter('replacer', Replacer);

	function Replacer() {
		return replacer;

		function replacer(str, search, replace) {
			return str.replace(search, replace);
		}
	}
})();
