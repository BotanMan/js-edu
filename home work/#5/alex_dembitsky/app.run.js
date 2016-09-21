(function(){
    "use strict";

    angular.module('app')
        .run(runStage);

    runStage.$inject = ['$rootScope', '$sce'];

    function runStage($rootScope, $sce){
        $rootScope.stickers  = [
            {
                title: 'title 1',
                imageUrl: 'http://lorempixel.com/200/200/',
                size: {
                    width: 500,
                    height: 500
                },
                price: 8621,
                description: 'text'
            },
            {
                title: 'title 2',
                imageUrl: 'http://lorempixel.com/200/200/',
                size: {
                    width: 1500,
                    height: 1500
                },
                price: 82621,
                description: 'text text'
            },
            {
                title: 'title 3',
                imageUrl: 'http://lorempixel.com/200/200/',
                size: {
                    width: 100,
                    height: 100
                },
                price: 81,
                description: 'text text text'
            },
            {
                title: 'title 4',
                imageUrl: 'http://lorempixel.com/200/200/',
                size: {
                    width: 1000,
                    height: 1000
                },
                price: 81231,
                description: 'text text text text text'
            },
            {
                title: 'title 5',
                imageUrl: 'http://lorempixel.com/200/200/',
                size: {
                    width: 200,
                    height: 100
                },
                price: 811,
                description: 'text text text text text text text'
            }
        ];
    }
})();
