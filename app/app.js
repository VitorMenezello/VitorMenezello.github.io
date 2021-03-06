let app = angular.module('App', ['ngRoute', 'ngMaterial', 'ngMessages']);

app.config(function($routeProvider) {
   console.log("route", $routeProvider);
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