(function () {
	'use strict';

	angular
		.module('app')
		.directive('stickerItem', stickerItem);

	function stickerItem() {
		var directive = {
			controller: 'StickerItemController',
			restrict: 'EA',
			templateUrl: 'app/common/directives/sticker-item/sticker-item.html',
			replace: true,
			scope: {
				item: "=stickerItem"
			}
		};

		return directive;
	}
})();
