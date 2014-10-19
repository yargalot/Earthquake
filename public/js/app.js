// Declare app level module which depends on filters, and services
angular.module('Earthquake', [
  'ngRoute',
  'ngAnimate',
  'Display.services'
])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider

  // Dashboard
  .when('/', {
    templateUrl: '/dashboard',
    controller: DashboardMainController,
    resolve: {
      earthquakes: function($http) {
        return $http.get('/api/eqs').then(
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

  // Otherwise redirect to
  .otherwise({
    redirectTo: '/'
  });

}]);
