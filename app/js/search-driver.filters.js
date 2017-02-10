(function(){
    'use strict';
    function searchDriver() {
        return function (text)
        {
            return String(text).replace(/\%VERSION\%/mg);
        };
    }

    angular.module('app').filter('searchDriver', searchDriver);

})();



