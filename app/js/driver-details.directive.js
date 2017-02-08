/* Directives */
(function(){

    function driverDetails (version) {
        return function (scope, elm, attrs)
        {
            elm.text(version);
        };
    }

    angular.module('app').directive('driverDetails', ['version', driverDetails])

})();
