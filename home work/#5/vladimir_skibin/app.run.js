(function () {
	"use strict";

	angular.module('app')
		.run(runStage);

	runStage.$inject = ['$rootScope'];

	function runStage($rootScope) {
		$rootScope.stickers = [];
		for (var i = 0; i < 20; i++) {
			$rootScope.stickers.push(
				{
					title: "Кот " + Math.ceil(Math.random() * 100),
					imageUrl: "http://loremflickr.com/100/100?" + Math.random(),
					size: {
						width: 100,
						height: 100
					},
					price: Math.ceil(Math.random() * 100),
					description: "Описание"
				}
			);
		}
	}
})();
