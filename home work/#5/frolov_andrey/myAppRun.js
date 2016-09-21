(function () {
    "use strict";

    angular.module('myApp')
        .run(runStage);

    runStage.$inject = ['$rootScope'];

    function runStage($rootScope) {
        $rootScope.stickersList = [
            {
                tittle: 'Hushed face',
                imageUrl: 'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/2236/large/1413860642/javascript.png',
                size: {
                    width: 100,
                    height: 100
                },
                price: 10,
                description: 'bla bla bla'
            },
            {
                tittle: 'Sleepy face',
                imageUrl: 'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/2236/large/1413860642/javascript.png',
                size: {
                    width: 100,
                    height: 100
                },
                price: 10,
                description: 'bla bla bla'
            },
            {
                tittle: 'Grimacing face',
                imageUrl: 'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/2236/large/1413860642/javascript.png',
                size: {
                    width: 100,
                    height: 100
                },
                price: 10,
                description: 'bla bla bla'
            }
        ];
    }
})();