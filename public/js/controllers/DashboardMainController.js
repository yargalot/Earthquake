DashboardMainController.$inject = ['$scope', '$http', '$interval'];

function DashboardMainController($scope, $http, $interval) {

  $http.get('/api').success(function(data) {

    console.log(data);

    $scope.earthquakes = data.earthquakes;

  });

}
