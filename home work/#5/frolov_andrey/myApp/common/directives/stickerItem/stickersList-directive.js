(function () {
    'use strict';


    angular
        .module('myApp')
        .directive('stickersListDirective', stickerList)
        .filter('priceFil', ['$sce', priceFilter])
        .filter('orderFil', ['$filter', '$sce', orderFil]);

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

    function orderFil($filter) {
        return function (item) {
            return $filter('orderBy')(item);
        };
    }

    function priceFilter($sce) {
        return function (item) {
            if (item <= '10') {
                return item = $sce.trustAsHtml("<span style='color: black; font-size: large'>" + item + "</span>");
            }
            else if (item > '10' && item <= '20') {
                return item = $sce.trustAsHtml("<span style='color: orange; font-size: large'>" + item + "</span>");
            }
            else {
                return item = $sce.trustAsHtml("<span style='color: red; font-size: large'>" + item + "</span>");
            }
        };
    }

})();

