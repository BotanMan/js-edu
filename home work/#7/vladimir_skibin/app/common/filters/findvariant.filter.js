(function () {
	'use strict';

	angular
		.module('app')
		.filter('findvariant', FindVariant);

	function FindVariant() {
		return findvariant;

		function findvariant(collection, variantId, field) {
			var curr = collection.filter(function(element) {
				return element.variantId == variantId;
			});

			var additional = (field == 'price' ? '$' : '');

			return curr.length ? additional + curr[0][field] : '';
		}
	}
})();
