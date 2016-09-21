(function(){
    "use strict";

    angular.module('myApp')
        .run(runStage);

    runStage.$inject = ['$rootScope'];

    function runStage($rootScope){
        $rootScope.stickers = [
            {
                title: 'JavaScript',
                imgURL:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/2236/large/1413860642/javascript.png',
                size: {
                    height: 4,
                    width: 4
                },
                price: '5$',
                description: 'JavaScript, for all your web dev needs.'
            },
            {
                title: 'AngularJS',
                imgURL:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/10576/large/1455562293/angular-2-a.png',
                size: {
                    height: 5,
                    width: 3
                    },
                price: '8$',
                description: 'This sticker will instantly increase your skill in AngularJS'
            },
            {
                title: 'JavaScript Says',
                imgURL:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/9204/large/1446670838/javascript-says.png',
                size: {
                    height: 6,
                    width: 2.7
                },
                price: '11$',
                description: 'JavaScript Says your tears are delicious'
            },
            {
                title: 'Vanilla JS',
                imgURL:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/10272/large/1454350846/vanilla-js.png',
                size: {
                    height: 7,
                    width: 3
                },
                price: '99$',
                description: 'The perfect sticker to show your support of the greatest Javascript framework ever created.'
            },
            {
                title: 'Node.js Hex Sticker',
                imgURL:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/14722/large/1471581079/nodejs-hex-sticker.png',
                size: {
                    height: 5,
                    width: 5
                },
                price: '12$',
                description: 'Because Hex logo looks awesome!'
            },
            {
                title: 'ECMAScript 6',
                imgURL:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/10042/large/1452984204/es6-slash-ecmascript-6.png',
                size: {
                    height: 'over 9999',
                    width: 'over 9999'
                },
                price: 'inestimable',
                description: 'Your name is Danila? If yes - SHUT UP AND BUY IT RIGHT NOW!'
            },
            {
                title: 'JavaScript Box',
                imgURL:'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/12447/large/1463152948/java-box.png',
                size: {
                    height: 10,
                    width: 10
                },
                price: '22$',
                description: 'JavaScript Bow, here you can find anything!'
            }
        ];
    }
})();
