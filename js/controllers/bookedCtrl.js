angular.module('devmtnTravel').controller('bookedCtrl', function($scope,$stateParams,mainSrv){
$scope.travelInfo = mainSrv.travelInfo;
console.log($scope.travelInfo);
for (var i = 0; i < $scope.travelInfo.length; i++){
  if($stateParams.id == $scope.travelInfo[i].id ){
    $scope.travelInfo = $scope.travelInfo[i];
  }
}


})
