/* Filters */

angular.module('app').filter('search', function ()
{
    return function (text)
    {
        return String(text).replace(/\%VERSION\%/mg);
    };
});
