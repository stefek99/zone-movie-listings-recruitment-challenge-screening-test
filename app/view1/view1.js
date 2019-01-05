'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.api'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'api', function($scope, api) { // cannot use fat arrow here: https://github.com/angular/angular.js/issues/14814#issuecomment-228083403

  $scope.rating = 3;

  $scope.search = function() {
    api.genres().then((actual) => {
      console.log(actual);
    })
  }

}]);  