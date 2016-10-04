angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
$scope.getData = mainSrv.travelInfo;

})
