(function(){

    function GetDriverInfoService($http) {
        var driverData = {};

        driverData.getDrivers = function ()
        {
            return $http.get('http://ergast.com/api/f1/2013/driverStandings.json').then(function (result)
            {
                return result.data;
            });
        };

        driverData.getDriverRaces = function (id)
        {
            return $http.get('http://ergast.com/api/f1/2013/drivers/' + id + '/results.json').then(function (result)
            {
                return result.data;
            });
        };
        driverData.getDriverInfo = function(name){
            return $http.get('http://ergast.com/api/f1/2013/drivers/' + name + '/driverStandings.json').then(function (result)
            {
                return result.data
            });
        };

        return driverData;
    }

    angular.module('app').factory('GetDriverInfoService', ['$http', GetDriverInfoService])
})();

