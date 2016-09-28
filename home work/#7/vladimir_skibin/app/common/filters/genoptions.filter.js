(function () {
	'use strict';

	angular
		.module('app')
		.filter('genoptions', GenOptions);

	function GenOptions() {
		return genoptions;

		function genoptions(collection) {
			return '<option disabled selected>--Выберите--</option>' + collection.map(function(element) {
				return '<option value="' + element.variantId + '">' + element.width + 'x' + element.height + '</option>';
			}).join('');
		}
	}
})();
