angular.module('popcornApp.controllers')
.controller('MovieController', function($scope, MoviesService, $routeParams, $sce) {
  console.log('MovieController');

  MoviesService.movies().then(function (movies) {
  	$scope.movies = movies;
	  $scope.movie = _.find($scope.movies,
	  	function (video) {
	  		return video.youtubeId == $routeParams.movie_id;
	  	})
	   $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0");
  });
})
 