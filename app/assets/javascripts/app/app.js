'use strict';

angular.module('popcornApp',['ngRoute', 'popcornApp.controllers'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/movie/:movie_id',
      {
        controller: 'MovieController',
        templateUrl: '/templates/movie.html'
      })
    .when('/', 
      {
        controller: 'MoviesController',
        templateUrl: '/templates/movies.html'
      })
    .otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
})
 .controller('MovieController', function($scope) {
  console.log('MovieController');
});
