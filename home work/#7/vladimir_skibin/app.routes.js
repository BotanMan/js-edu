(function () {
    "use strict";

    angular
        .module('app')
        .config(configRoutes);

    configRoutes.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

    function configRoutes($urlRouterProvider, $locationProvider, $stateProvider) {

        $stateProvider
            .state({
                name: 'list',
                url: '/',
                controller: 'ListController',
                templateUrl: 'app/common/controllers/list/list.html',
                controllerAs: 'stickers',
                resolve: {
                    'stickers': function ($q, itemsApi) {
                        return itemsApi.getItems();
                    }
                }
            })
            .state({
                name: 'tags',
                url: '/tag/{tag}/',
                controller: 'ListController',
                templateUrl: 'app/common/controllers/list/list-no-search.html',
                controllerAs: 'stickers',
                resolve: {
                    'stickers': function (itemsApi, $injector, $stateParams) {
                        var $filter = $injector.get('$filter');
                        return $filter('searcher')(itemsApi.getItems(), $stateParams.tag);
                    }
                }
            })
            .state({
                name: 'detailedItem',
                url: '/{id:int}/',
                controller: 'ListItemController',
                templateUrl: 'app/common/controllers/list-item/list-item.html',
                controllerAs: 'item',
                resolve: {
                    'item': function (itemsApi, $stateParams) {
                        return itemsApi.getItem($stateParams.id);
                    }
                }
            })
            .state({
                name: 'error404',
                templateUrl: 'app/common/templates/404.html'
            });

        $urlRouterProvider.otherwise('/')

        //$locationProvider.html5Mode(true);
    }
})();
