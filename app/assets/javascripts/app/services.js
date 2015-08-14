angular.module('popcornApp.services',[])
 .service('MoviesService', 
  function($q, $http) {
    this.movies = function(name) {
      var d = $q.defer();

      $http({method: 'GET', url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=+UUi8e0iOVk1fEOogdfu4YgfA&key=AIzaSyDGA2AW7MVfqQDkzrH3j1bSwwbF_vCxHiU'}).
      then(function(response) {
        var movies = _.map(response.data.items, function(movie) {
          return {
           youtubeId: movie.snippet.resourceId.videoId,
            title: movie.snippet.title,
            description: movie.snippet.description,
            posterUrl: movie.snippet.thumbnails.high.url       
          };
        });
        d.resolve(movies);
      },
      function(error) {
        d.reject(error);
      });
      return d.promise;
    }
  }
);

