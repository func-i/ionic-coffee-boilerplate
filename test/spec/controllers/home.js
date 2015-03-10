(function() {
  'use strict';
  describe('Controller: HomeCtrl', function() {
    var HomeCtrl, scope;
    HomeCtrl = {};
    scope = {};
    beforeEach(function() {
      module('angularIonicApp');
      return inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        HomeCtrl = $controller('HomeCtrl', {
          $scope: scope
        });
        return true;
      });
    });
    return it('should set company name', function() {
      return expect(HomeCtrl.company.name).toBe('Test Company');
    });
  });

}).call(this);

//# sourceMappingURL=home.js.map
