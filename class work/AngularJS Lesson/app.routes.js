(function () {
    "use strict";

    angular.module('app')
        .config(config);

    config.$inject = ['$locationProvider', '$urlRouterProvider', 'stateHelperProvider'];

    function config($locationProvider, $urlRouterProvider, $stateHelperProvider) {
        $stateHelperProvider
            .state({
                name: 'list',
                url: '/list',
                controller: 'ListController',
                templateUrl: '/app/list/list.html',
                children: [{
                    name: 'item',
                    url: '/item/{id:int}',
                    // resolve: {
                    //     'item': function (itemsStore) {
                    //         return itemsStore.getItems(function(data){
                    //
                    //         });
                    //     }
                    // },
                    controllerAs: 'i',
                    controller: 'ListItemController',
                    templateUrl: '/app/list-item/list-item.html'
                }, {
                    name: 'detailedItem',
                    url: '/detailed-item/{id:int}',
                    // resolve: {
                    //     'item': function (itemsStore) {
                    //         return itemsStore.getItems()
                    //             .then((data) => {
                    //                 console.log(data.length);
                    //                 return data;
                    //             })
                    //     }
                    // },
                    controller: 'ListItemController',
                    templateUrl: '/app/list-item/detailed-list-item.html',
                    controllerAs: 'detailed'
                }]
            });

        $urlRouterProvider.otherwise('/list');
        //$locationProvider.html5Mode(true);
    }
})();
