(function () {
    "use strict";

    angular
        .provider('apiService', function () {

            var _apiUrl = '';

            this.setApiUrl = function (apiUrl) {
                _apiUrl = apiUrl;
            };

            this.$get = ['$rootScope', provider];

            function provider($rootScope) {
                this.getResources = function () {
                    return _apiUrl;
                }
            }
        });
})();

//service
//factory
//provider
//directive
//controller
//component
//module
//filter