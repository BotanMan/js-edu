(function () {
	'use strict';

	angular
		.module('app')
		.directive('stickersList', stickersList);

	function stickersList() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'app/common/directives/stickers-list/stickers-list.html',
			replace: true,
			scope: {
				elements: '=stickersList',
				filterText: '='
			}
		};

		return directive;
	}
})();
