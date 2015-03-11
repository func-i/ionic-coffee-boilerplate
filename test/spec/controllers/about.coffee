'use strict'

describe 'Controller: AboutCtrl', ->

  AboutCtrl = {}
  scope = {}

  beforeEach ->
    module 'angularIonicApp'
    inject ($controller, $rootScope) ->
      scope = $rootScope.$new()
      AboutCtrl = $controller 'AboutCtrl',
        $scope: scope
      return true

  it 'should set company description on the scope', ->
    expect(scope.companyDesc).toBe "Something about our company."