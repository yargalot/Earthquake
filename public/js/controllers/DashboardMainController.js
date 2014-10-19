DashboardMainController.$inject = ['$scope', '$http', '$interval', 'earthquakes', 'ResolutionService'];

function DashboardMainController($scope, $http, $interval, earthquakes, resolutionService) {

  console.log(resolutionService);

  $scope.resolutionGrid = resolutionService.largeResolution ? 3 : 2;

  $scope.earthquakes = earthquakes;

  $http.get('/api/totals').then(
    function success(response) {

      $scope.totals = response.data;

    },
    function error(reason) {
      return false;
    }
  );

}
