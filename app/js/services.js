var factory = angular.module('app')
        .factory('ergastAPIservice', function ($http)
        {

            var ergastAPI = {};

            ergastAPI.getDrivers = function ()
            {
                return $http.get('http://ergast.com/api/f1/2013/driverStandings.json').then(function (result)
                {
                    return result.data;
                });
            };

            ergastAPI.getDriverRaces = function (id)
            {
                return $http.get('http://ergast.com/api/f1/2013/drivers/' + id + '/results.json').then(function (result)
                {
                    return result.data;
                });
            };

            return ergastAPI;
        });
