(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('stickersListDirective', stickerList);



    function stickerList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'myApp/common/directives/stickerItem/stickersList.html',
            replace: true,
            scope: {
                 stickers: '='
            }
        };

        return directive;
    }

})();

