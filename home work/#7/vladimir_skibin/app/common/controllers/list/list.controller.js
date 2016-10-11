(function () {
	'use strict';

	angular
		.module('app')
		.controller('ListController', listController);

	listController.$inject = ['stickers'];

	function listController(stickers) {
		console.log(stickers);
		this.stickers = stickers;
	}
})();
