(function () {
	'use strict';

	angular
		.module('app')
		.controller('ListItemController', listItemController);

	listItemController.$inject = ['item'];

	function listItemController(item) {
		this.item = item;
	}
})();
