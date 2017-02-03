/* Directives */

angular.module('app').directive('driverDetails', function (version)
{
    return function (scope, elm, attrs)
    {
        elm.text(version);
    };
});
