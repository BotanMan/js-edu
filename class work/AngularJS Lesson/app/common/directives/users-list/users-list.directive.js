(function () {
    'use strict';

    angular
        .module('app')
        .directive('usersList', usersList)
        .controller('UsersListController', usersListController);

    function usersList() {
        var directive = {
            controller: 'UsersListController',
            restrict: 'E',
            templateUrl: 'app/common/directives/users-list/users-list.html',
            replace: true,
            scope: {
                users: '=usersList' //'@', '&'
            }
        };

        return directive;
    }

    usersListController.$inject = ['$scope', 'itemsStore'];
    function usersListController($scope, itemsStore) {
        $scope.addUser = addUser;
        $scope.clearName = clearName;
        $scope.toggleMode = toggleMode;

        itemsStore.getItems(false)
            .then((data)=> {
                console.log('1', data);
                return itemsStore.getItems(false)
            })
            .then((data)=> {
                console.log('2', data);
                return itemsStore.getItems(true)
            })
            .then((data)=> {
                console.log('3', data);
                return $scope.data = data;
            })
            .catch((response)=>{
                console.log('catch', response);
            });




        function toggleMode() {
            $scope.isEdit = !$scope.isEdit ? true : false;
        }

        function addUser(firstName) {
            $scope.users.push({firstName: firstName});
        }

        function clearName() {
            $scope.newUserName = '';
        }
    }
})();

