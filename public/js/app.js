// Declare app level module which depends on filters, and services
angular.module('Earthquake', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: '/dashboard',
    controller: DashboardMainController
  })
  .otherwise({
    redirectTo: '/'
  });

}]);
