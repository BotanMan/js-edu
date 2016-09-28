(function () {
	'use strict';

	angular
		.module('app')
		.filter('buildtags', Buildtags);

	function Buildtags() {
		return buildtags;

		function buildtags(collection) {
			return collection.map(function(element) {
				return '<a href="/tag/' + element + '/">#' + element + '</a> ';
			}).join('');
		}
	}
})();
