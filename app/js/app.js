var app = angular.module('app', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)
        {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            $routeProvider.when('/drivers', {
                templateUrl: 'partials/drivers.html'
            }).when('/drivers/:id', {
                templateUrl: 'partials/driver.html',
                controller: 'driverController'
            }).otherwise({redirectTo: '/drivers'});
        }]);
