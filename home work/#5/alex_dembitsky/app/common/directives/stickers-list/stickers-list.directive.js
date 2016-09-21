(function () {
    'use strict';

    angular
        .module('app')
        .directive('stickerList', stickerList);

    function stickerList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/common/directives/stickers-list/stickers-list.html',
            replace: true,
            scope: {
                stickers: '=stickerList'
            }
        };

        return directive;
    }
})();
