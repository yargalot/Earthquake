DetailController.$inject = ['$scope', '$http', '$interval', '$location', '$timeout', 'ResolutionService', 'earthquake'];

function DetailController($scope, $http, $interval, $location, $timeout, resolutionService, earthquake) {

  if (!earthquake) {
    $location.path('/');
  }

  console.log(earthquake);

  $scope.earthquake = earthquake;


  $scope.map = {
    center: {
        latitude:   $scope.earthquake.lat,
        longitude:  $scope.earthquake.lon
    },
    zoom: 7
  };

  $scope.marker = {
    id: 0,
    coords: {
      latitude: $scope.earthquake.lat,
      longitude: $scope.earthquake.lon
    },
    options: { draggable: false }
  };

  $timeout(function() {
    $scope.showMap = true;
  }, 50);

}
