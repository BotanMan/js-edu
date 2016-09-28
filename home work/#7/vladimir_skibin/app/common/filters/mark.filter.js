(function () {
	'use strict';

	angular
		.module('app')
		.filter('mark', Mark);

	Mark.$inject = ['Marker'];

	function Mark(Marker) {
		return mark;

		function mark(str, price) {
			return Marker.mark(str, price);
		}
	}
})();
