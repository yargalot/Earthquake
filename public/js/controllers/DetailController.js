DetailController.$inject = ['$scope', '$http', '$interval', '$location', '$timeout', 'ResolutionService', 'earthquake'];

function DetailController($scope, $http, $interval, $location, $timeout, resolutionService, earthquake) {

  if (!earthquake) {
    $location.path('/');
    return;
  }

  $scope.earthquake = earthquake;


  var coordinates = {
    latitude:   earthquake.lat,
    longitude:  earthquake.lon
  };

  $scope.map = {
    center: coordinates,
    zoom: 7
  };

  $scope.marker = {
    id: 0,
    coords: coordinates,
    options: { draggable: false }
  };

  $timeout(function() {
    $scope.showMap = true;
  }, 50);

}
