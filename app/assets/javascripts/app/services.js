angular.module('popcornApp.services',[])
 .service('MoviesService', 
  function($q, $http) {
    this.movies = function(name) {
      var d = $q.defer();

      $http({method: 'GET',
       url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=+UUi8e0iOVk1fEOogdfu4YgfA&key=AIzaSyDGA2AW7MVfqQDkzrH3j1bSwwbF_vCxHiU'}).
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
  })
 .service('UserService', 
     function($q, $cookieStore, $rootScope) {
       var service = this;
       this._user = null;
       this.setCurrentUser = function(u) {
         service._user = u;
       };
       this.currentUser = function() {
         var d = $q.defer();
         if(service._user) {
           d.resolve(service._user);
         } else if($cookieStore.get('user')) {
           service._user = $cookieStore.get('user');
           $rootScope.$broadcast('user:set',service._user)
           d.resolve(service._user);
         } else {
           d.resolve(null)
         }
         return d.promise;
       };
       this.login = function(email) {
         var d = $q.defer();
         var user = {
           email: email,
           id: 1
         };

         service.setCurrentUser(user);
         $cookieStore.put('user', user)
         $rootScope.$broadcast('user:set', user);
         d.resolve(user);
         return d.promise;
       };
       this.logout = function() {
         var d = $q.defer();
         service._user = null;
         $cookieStore.remove('user');
         $rootscope.$broadcast("user:unset")
         d.resolve();
         return d.promise;
       };
    });