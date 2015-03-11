'use strict'

describe 'Controller: HomeCtrl', ->

  HomeCtrl = {}
  scope = {}

  beforeEach ->
    module 'angularIonicApp'
    inject ($controller, $rootScope) ->
      scope = $rootScope.$new()
      HomeCtrl = $controller 'HomeCtrl',
        $scope: scope
      return true

  it 'should set company name to Test Company', ->
    expect(HomeCtrl.company.name).toBe 'Test Company'
