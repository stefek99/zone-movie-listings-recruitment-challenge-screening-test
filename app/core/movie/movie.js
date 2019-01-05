angular.module('myApp.movie', [])
.directive('movie', function() {
  return {
    restrict: 'E',
    templateUrl: 'core/movie/movie.html'
  };
});