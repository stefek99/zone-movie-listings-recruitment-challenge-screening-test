'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.api', 'myApp.helpers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    resolve: {
      genres: function (api) {
        return api.genres();
      },
      nowPlaying: function (api) {
        return api.nowPlaying();
      },

    }
  });
}])

.controller('View1Ctrl', ['$scope', 'api', 'genres', 'nowPlaying', 'helpers', function($scope, api, genres, nowPlaying, helpers) { // cannot use fat arrow here: https://github.com/angular/angular.js/issues/14814#issuecomment-228083403

  $scope.nowPlaying = nowPlaying;
  $scope.genres = helpers.genresOnlyContain(genres, nowPlaying);
  $scope.rating = 3;


  // console.log($scope.genres, genres);
  // console.log(genres);
  // console.log(nowPlaying);

  // $scope.search = function() {
  //   api.genres().then((actual) => {
  //     console.log(actual);
  //   })
  // }


  $scope.filterFn = function(movie) {
    return movie.vote_average >= $scope.rating;
  };

}]);  