"use strict"

@angularIonicApp = angular.module "angularIonicApp", [
  'ionic',
  'ngCookies',
  'ngResource',
  'ngTouch',

  'angularIonicApp.controllers',
  'angularIonicApp.directives',
  'angularIonicApp.filters',
  'angularIonicApp.resources',
  'angularIonicApp.services',
  'angularIonicApp.interceptors'
]

@controllerModule  = angular.module 'angularIonicApp.controllers', []
@directiveModule   = angular.module 'angularIonicApp.directives', []
@filterModule      = angular.module 'angularIonicApp.filters', []
@resourceModule    = angular.module 'angularIonicApp.resources', []
@serviceModule     = angular.module 'angularIonicApp.services', []
@configModule      = angular.module 'angularIonicApp.config', []
@interceptorModule = angular.module 'angularIonicApp.interceptors', []

@angularIonicApp.run ($ionicPlatform, $rootScope, $state) ->
  $ionicPlatform.ready () ->
    # Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    # for form inputs)
    if window.cordova && window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true

    if window.StatusBar
      StatusBar.styleDefault()

    console.log "App started"
