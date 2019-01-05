'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.api'])

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

.controller('View1Ctrl', ['$scope', 'api', 'genres', 'nowPlaying', function($scope, api, genres, nowPlaying) { // cannot use fat arrow here: https://github.com/angular/angular.js/issues/14814#issuecomment-228083403

  $scope.genres = genres;
  $scope.nowPlaying = nowPlaying;

  $scope.rating = 3;

  console.log(genres);
  console.log(nowPlaying);

  $scope.search = function() {
    api.genres().then((actual) => {
      console.log(actual);
    })
  }

}]);  