(function(){

    function SearchDriversController (GetDriverInfoService) {

        var ctrl = this;

        ctrl.nameFilter = null;
        ctrl.driversList = [];

        ctrl.searchFilter = function (driver)
        {
            var re = new RegExp(ctrl.nameFilter, 'i');
            return !ctrl.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
        };

        GetDriverInfoService.getDrivers().then(function (response)
        {
            //Digging into the response to get the relevant data
            ctrl.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
    }

    angular.module('app').controller('SearchDriversController', ['GetDriverInfoService', SearchDriversController])

})();
