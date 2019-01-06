'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    let view1Ctrl, $controller, $scope;

    beforeEach(inject(function(_$controller_, _$rootScope_, _api_) {
      $controller = _$controller_;
      $scope = _$rootScope_.$new();
      view1Ctrl = $controller('View1Ctrl', {
        $scope: $scope,
        api: _api_,
        nowPlaying: undefined,
        genres: undefined,
      });
    }));

    it('should ....', inject(function($controller) {
      expect(view1Ctrl).toBeDefined();
    }));

  });
});