(function () {
	"use strict";

	angular
		.module('app')
		.config(configData);

	configData.$inject = ['itemsApiProvider'];

	function configData($itemsApiProvider) {
		$itemsApiProvider.setApiUrl('app/data/items.json');
		$itemsApiProvider.loadItems();
	}
})();
