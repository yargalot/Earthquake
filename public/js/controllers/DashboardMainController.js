DashboardMainController.$inject = ['$scope', '$http', '$interval', 'earthquakes'];

function DashboardMainController($scope, $http, $interval, earthquakes) {

  console.log(earthquakes);

  $scope.earthquakes = earthquakes;

}
