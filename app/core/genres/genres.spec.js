'use strict';

describe('myApp.genres module', function() {
  beforeEach(module('myApp.genres'));

  describe('genres filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
      $provide.service('api', function() {
        let service = {};
        service.genre = (id) => {
            return 'Adventure';
        }
        return service;
      });
    }));

    it('should replace VERSION', inject(function(genreFilter) {
      expect(genreFilter('12')).toEqual('Adventure');
    }));
  });
});
