// avoid - when using with a route and dynamic pairing is desired

angular.module('app').config(config);

function config($routeProvider)
{
    $routeProvider.when('/avengers', {
        templateUrl: 'avengers.html'
    });
}
