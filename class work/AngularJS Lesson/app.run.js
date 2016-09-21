(function(){
    "use strict";

    angular.module('app')
        .run(runStage);

    runStage.$inject = ['$rootScope', '$sce'];
    
    function runStage($rootScope, $sce){
        $rootScope.newName = 'Igor';
        $rootScope.users = [
            {firstName: 'Innokentiy'},
            {firstName: 'Vasilisa'}
        ];
        
        $rootScope.rawHtml = '<button>Text</button>';

        $rootScope.updateHtml = function(){
            $rootScope.html = $sce.trustAsHtml($rootScope.rawHtml);
        }

        $rootScope.updateHtml();
    }
})();
