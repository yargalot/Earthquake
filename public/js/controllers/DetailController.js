DetailController.$inject = ['$scope', '$http', '$interval', '$location', 'ResolutionService', 'earthquake'];

function DetailController($scope, $http, $interval, $location, resolutionService, earthquake) {

  if (!earthquake) {
    $location.path('/');
  }

  $scope.earthquake = earthquake;

}
