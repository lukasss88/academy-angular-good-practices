(function(){
    'use strict';
    function DriverController ($routeParams, GetDriverInfoService){

        var ctrl = this;
        ctrl.id = $routeParams.id;
        ctrl.races = [];
        ctrl.driver = null;

        GetDriverInfoService.getDriverInfo(ctrl.id).then(function(result){
            ctrl.driver = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
        });

        GetDriverInfoService.getDriverRaces(ctrl.id).then(function (response)
        {
            ctrl.races = response.MRData.RaceTable.Races;
        });
    }
    angular.module('app').controller('DriverController', ['$routeParams', 'GetDriverInfoService', DriverController] );

})();
