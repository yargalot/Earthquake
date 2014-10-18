// Declare app level module which depends on filters, and services
angular.module('Earthquake', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: '/dashboard',
    controller: DashboardMainController,
    resolve: {
      earthquakes: function($http) {
        return $http.get('/api').then(
          function success(response) {
            return response.data.earthquakes;
          },
          function error(reason) {
            return false;
          }
        );
      }
    }
  })
  .otherwise({
    redirectTo: '/'
  });

}]);
