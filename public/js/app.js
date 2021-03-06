// Declare app level module which depends on filters, and services
angular.module('Earthquake', [
  'ngRoute',
  'ngAnimate',
  'Display.services',
  'uiGmapgoogle-maps'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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
  .when('/search/:year', {
    templateUrl: '/search',
    controller: SearchController,
    resolve: {
      earthquakes: function($http, $route) {

        var year = $route.current.params.year;

        return $http.get('/api/eqs/' + year).then(
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

  .when('/search/:year/:month', {
    templateUrl: '/search',
    controller: SearchController,
    resolve: {
      earthquakes: function($http, $route) {

        var year  = $route.current.params.year;
        var month = $route.current.params.month;

        return $http.get('/api/eqs/' + year + '/' + month).then(
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

  .when('/earthquake/:uid', {
    templateUrl: '/detail',
    controller: DetailController,
    resolve: {
      earthquake: function($rootScope) {
        return $rootScope.whatEarthquake;
      }
    }
  })

  // Otherwise redirect to
  .otherwise({
    redirectTo: '/'
  });


}])

.controller('MainController', function($scope, $http, $interval, $rootScope) {

  $scope.viewEarthQuake = false;

  $rootScope.$watch('showLoader', function(newVal, oldVal) {
    if (newVal !== undefined) {
        $scope.showLoader = newVal;
    }
  });


  $scope.viewEarthquake = function() {

      $rootScope.whatEarthquake = this.earthquake;
  };

})
.run(['$rootScope', function($rootScope) {

  console.log('test');

  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    $rootScope.showLoader = true;
  });

  $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
    $rootScope.showLoader = false;
  });

}]);
