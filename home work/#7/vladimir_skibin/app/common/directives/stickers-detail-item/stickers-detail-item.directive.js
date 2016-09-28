(function () {
	'use strict';

	angular
		.module('app')
		.directive('stickersDetailItem', stickersDetailItem);

	function stickersDetailItem() {
		var directive = {
			controller: 'StickerItemController',
			restrict: 'EA',
			templateUrl: 'app/common/directives/stickers-detail-item/stickers-detail-item.html',
			replace: true,
			scope: {
				item: "=stickersDetailItem"
			}
		};

		return directive;
	}
})();
