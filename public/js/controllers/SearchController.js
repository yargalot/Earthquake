SearchController.$inject = ['$scope', '$http', '$interval', 'earthquakes', 'ResolutionService'];

function SearchController($scope, $http, $interval, earthquakes, resolutionService) {

  console.log(resolutionService);

  $scope.resolutionGrid = resolutionService.largeResolution ? 3 : 2;

  $scope.earthquakes = earthquakes;

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
