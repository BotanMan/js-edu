(function () {
	'use strict';

	angular
		.module('app')
		.filter('searcher', Searcher);

	Searcher.$inject = ['$rootScope'];

	function Searcher($rootScope) {
		return searcher;

		function searcher(objects, str) {
			str = str || $rootScope.filterText || '';
			return objects.filter(function(element) {
				var reg = new RegExp(str.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1"), 'iu');
				return reg.test(element.title) || ~element.tags.indexOf(str);
			});
		}
	}
})();
