(function() {
  'use strict';
  describe('Controller: AboutCtrl', function() {
    var AboutCtrl, scope;
    AboutCtrl = {};
    scope = {};
    beforeEach(function() {
      module('angularIonicApp');
      return inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('AboutCtrl', {
          $scope: scope
        });
        return true;
      });
    });
    return it('set company description on the scope', function() {
      return expect(scope.companyDesc).toBe("Something about our company.");
    });
  });

}).call(this);

//# sourceMappingURL=about.js.map
