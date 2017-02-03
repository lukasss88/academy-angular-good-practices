var app = angular.module('app');
app.controller('driversController', function ($scope, ergastAPIservice)
{
    $scope.nameFilter = null;
    $scope.driversList = [];

    $scope.searchFilter = function (driver)
    {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers().then(function (response)
    {
        //Digging into the response to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
});

/* Driver controller */
app.controller('driverController', function ($scope, $routeParams, ergastAPIservice, $http)
{
    $scope.id = $routeParams.id;

    $http.get('http://ergast.com/api/f1/2013/drivers/' + $scope.id + '/driverStandings.json').then(function (result)
    {
        $scope.driver = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverRaces($scope.id).then(function (response)
    {
        $scope.races = response.MRData.RaceTable.Races;
    });
});
