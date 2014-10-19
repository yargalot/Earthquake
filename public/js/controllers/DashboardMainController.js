DashboardMainController.$inject = ['$scope', '$http', '$interval', 'earthquakes', 'ResolutionService'];

function DashboardMainController($scope, $http, $interval, earthquakes, resolutionService) {

  console.log(resolutionService);

  $scope.resolutionGrid = resolutionService.largeResolution ? 3 : 2;

  $scope.earthquakes = earthquakes;

}
