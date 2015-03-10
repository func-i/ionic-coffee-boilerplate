"use strict"

@angularIonicApp = angular.module "angularIonicApp", [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',

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

@angularIonicApp.run ($rootScope, $state) ->
  # Do other stuff here as needed
  console.log "App started"
