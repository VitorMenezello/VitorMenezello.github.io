let app = angular.module('App', ['ngMaterial', 'ngMessages'])

.config(function($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   $routeProvider
   .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'HomeCtrl',
   })
   .when('/about', {
      templateUrl: 'app/views/about.html',
      controller: 'AboutCtrl',
   })
   .when('/work', {
      templateUrl: 'app/views/work.html',
      controller: 'WorkCtrl',
   })
   .when('/contact', {
      templateUrl: 'app/views/contact.html',
      controller: 'ContactCtrl',
   })
   .otherwise ({ redirectTo: '/' });
});