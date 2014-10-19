SearchController.$inject = ['$scope', '$http', '$interval', '$routeParams', 'earthquakes', 'ResolutionService'];

function SearchController($scope, $http, $interval, $routeParams, earthquakes, resolutionService) {

  console.log($routeParams.year);

  $scope.resolutionGrid = resolutionService.largeResolution ? 3 : 2;
  $scope.earthquakeYear = $routeParams.year;
  $scope.earthquakeMonth = $routeParams.month;

  $scope.earthquakes = earthquakes;

  $scope.matchYear = function() {

    return this.key.match($scope.earthquakeYear) ? true : false;
  };

  $http.get('/api/totals').then(
    function success(response) {
      console.log(response);

      $scope.totals = response.data;

    },
    function error(reason) {
      return false;
    }
  );

}
