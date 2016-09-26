(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListItemController', listItemController);

    listItemController.$inject = ['item'];

    function listItemController(item) {
        var vm = this;

        this.item = item;
    }
})();

