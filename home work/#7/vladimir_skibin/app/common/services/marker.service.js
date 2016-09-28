(function () {
	'use strict';

	angular
		.module('app')
		.service('Marker', Marker);

	Marker.$inject = ['$sce'];

	function Marker($sce) {
		this.mark = mark;

		function mark(str, price) {
			if (price < 10) {
				return $sce.trustAsHtml('<font style="color: #aa0000;">' + str + '</font>');
			}
			else if (price < 25) {
				return $sce.trustAsHtml('<font style="color: #aa00aa;">' + str + '</font>');
			}
			else if (price < 50) {
				return $sce.trustAsHtml('<font style="color: #229977;">' + str + '</font>');
			}
			else if (price < 75) {
				return $sce.trustAsHtml('<font style="color: #33ffff;">' + str + '</font>');
			}

			return $sce.trustAsHtml('<font style="color: #22ff22;">' + str + '</font>');
		}
	}
})();
