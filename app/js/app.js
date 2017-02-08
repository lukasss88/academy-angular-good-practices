(function(){
   angular.module('app', ['ngRoute'])
            .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)
            {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });

                $routeProvider.when('/drivers', {
                    templateUrl: 'partials/drivers.html',
                    controller: 'SearchDriversController',
                    controllerAs: 'searchCtrl'
                }).when('/drivers/:id', {
                    templateUrl: 'partials/driver.html',
                    controller: 'DriverController',
                    controllerAs: 'driverCtrl'
                }).otherwise({redirectTo: '/drivers'});
            }]);
})();

