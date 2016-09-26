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
                    resolve: {
                        'item': function ($stateParams) {
                            return {id: 1, name: '123'};
                        }
                    },
                    controllerAs: 'i',
                    controller: 'ListItemController',
                    templateUrl: '/app/list-item/list-item.html'
                }, {
                    name: 'detailedItem',
                    url: '/detailed-item/{id:int}',
                    resolve: {
                        'item': function ($stateParams) {
                            return {id: 1, name: '123'};
                        }
                    },
                    controller: 'ListItemController',
                    templateUrl: '/app/list-item/detailed-list-item.html',
                    controllerAs: 'detailed'
                }]
            });

        $urlRouterProvider.otherwise('/list');
        $locationProvider.html5Mode(true);
    }
})();
