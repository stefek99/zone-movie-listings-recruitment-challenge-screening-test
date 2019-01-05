angular.module('myApp.api', [])
  
  .value('key', 'fd89eaca88c8dfe61da3335a0b5b1c49')
  .value('base', 'https://api.themoviedb.org/3')
  .value('imagePath', 'https://image.tmdb.org/t/p/') // taken from the configuration API call: https://api.themoviedb.org/3/configuration?api_key=fd89eaca88c8dfe61da3335a0b5b1c49
                                                     // "It is recommended you cache this data within your application and check for updates every few days."
  .service('api', ['key', 'base', '$http', function(key, base, $http) {
    let service = {};

    service.genres = () => {
      let path = '/genre/movie/list'
      return $http.get(`${base}${path}?api_key=${key}`);
    }

    service.nowPlaying = () => {
      let path = '/movie/now_playing';
      return $http.get(`${base}${path}?api_key=${key}`);
    }



    return service;
  }])
  