(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('stickerList', stickerList);

    function stickerList() {
        var directive = {
            templateUrl: 'app/common/directives/sticker-list/sticker-list.html',
            replace: true,
            scope: {
                stickers: '=stickerList'
            }
        };

        return directive;
    }
})();