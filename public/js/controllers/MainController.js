MainController.$inject = ['$scope', '$http', '$interval', '$rootScope'];

function MainController($scope, $http, $interval, $rootScope) {

  $scope.loading = $rootScope.showLoader;

  console.log('test');

}
