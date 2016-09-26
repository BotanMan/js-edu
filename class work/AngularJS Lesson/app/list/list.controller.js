(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListController', listController);

    listController.$inject = ['$injector', '$scope','$state', '$stateParams'];

    function listController($injector, $scope, $state, $stateParams) {
        var $filter = $injector.get('$filter');
        
        $scope.items = [{
            id: 1,
            name: 'First item',
            description : "Lorem ipsum",
            date: $filter('date')(new Date(), 'dd.MM.yyyy')
        }, {
            id: 2,
            name: 'Second item',
            description : "Lorem ipsum another"
        }];

        $scope.getState = function() {
            return JSON.stringify($state.current);
        };

        $scope.goToDetails = function(id){
            $state.go('list.detailedItem', {id: id})
        };
    }

})();

