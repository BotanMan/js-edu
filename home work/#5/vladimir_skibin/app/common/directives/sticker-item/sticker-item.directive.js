(function () {
	'use strict';

	angular
		.module('app')
		.directive('stickerItem', stickerItem);

	function stickerItem() {
		var directive = {
			controller: stickerItemController,
			restrict: 'EA',
			templateUrl: 'app/common/directives/sticker-item/sticker-item.html',
			replace: true,
			scope: {
				item: "=stickerItem"
			}
		};

		return directive;

		function stickerItemController($scope) {
			$scope.add2Basket = add2Basket;

			function add2Basket() {
				alert($scope.item.title + ' добавлен в корзину');
				$scope.item.inBasket = true;
			}
		}
	}
})();
