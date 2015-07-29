angular.module('popcornApp.controllers')
.controller('MovieController', function($scope, MoviesService, $routeParams, $sce) {
  console.log('MovieController');
  $scope.movies = MoviesService.movies();
  console.log($routeParams);
  $scope.movie = _.find($scope.movies,
  	function (video) {
  		return video.youtubeId == $routeParams.movie_id;
  	})
   $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0");
});