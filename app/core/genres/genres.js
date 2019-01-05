'use strict';

angular.module('myApp.genres', [])

.filter('genre', ['api', function(api) {
  return function(id) {
    return api.genre(id);
  };
}]);
