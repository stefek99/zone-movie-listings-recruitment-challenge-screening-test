angular.module('myApp.helpers', [])

  .service('helpers', [function() {
    let service = {};

    // Must only contain genres from the TMDb API that are in the returned movie result set.
    service.genresOnlyContain = (genres, movies) => {
        let genresInMovies = []; // Alternatively use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
        movies.forEach((movie) => {
            genresInMovies = genresInMovies.concat(movie.genre_ids);
        })

        return genres.filter((genre) => genresInMovies.includes(genre.id));
    };

    return service;
  }])
  