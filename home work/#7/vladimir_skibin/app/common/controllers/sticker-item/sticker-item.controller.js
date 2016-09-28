(function () {
	'use strict';

	angular
		.module('app')
		.controller('StickerItemController', stickerItemController);

	stickerItemController.$inject = ['$scope'];

	function stickerItemController($scope) {
		$scope.add2Basket = add2Basket;
		$scope.currentVariant = 0;
		$scope.item.inBasket = [];

		$scope.$watch('variant', function (variant) {
			$scope.currentVariant = variant;
		});

		function add2Basket() {
			var curr = $scope.item.sizes.filter(function (element) {
				return element.variantId == $scope.currentVariant;
			});

			if (curr.length) {
				alert($scope.item.title + ' (' + curr[0].width + 'x' + curr[0].height + ') добавлен в корзину');
				$scope.item.inBasket[$scope.currentVariant] = true;
			}
		}
	}
})();
