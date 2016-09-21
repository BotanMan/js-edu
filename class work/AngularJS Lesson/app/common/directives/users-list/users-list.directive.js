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

    usersListController.$inject = ['$scope'];
    function usersListController($scope){
        $scope.addUser = addUser;
        $scope.clearName = clearName;
        $scope.toggleMode = toggleMode;

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

