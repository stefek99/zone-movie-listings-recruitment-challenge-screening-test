angular.module('myApp.api', [])
  
  .value('key', 'fd89eaca88c8dfe61da3335a0b5b1c49')
  .value('base', 'https://api.themoviedb.org/3')

  .service('api', ['key', 'base', '$http', '$q', function(key, base, $http, $q) {
    let service = {};

    let genresLookup = {};

    service.genres = () => {
      let defer = $q.defer();
      let path = '/genre/movie/list'
      $http.get(`${base}${path}?api_key=${key}`).then((response) => {
        response.data.genres.forEach((elem) => {
          genresLookup[elem.id + ""] = elem.name; // creating a basic mapping for efficient use later on
        })
        defer.resolve(response.data.genres);
      })
      return defer.promise;
    }

    service.genre = (id) => {
      return genresLookup[id];
    }

    service.nowPlaying = () => {
      let path = '/movie/now_playing';
      return $http.get(`${base}${path}?api_key=${key}`);
    }



    return service;
  }])
  