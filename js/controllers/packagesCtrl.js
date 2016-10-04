angular.module('devmtnTravel').controller('packagesCtrl', function($scope,$stateParams, mainSrv){
$scope.getTravelInfo= mainSrv.travelInfo;

})
