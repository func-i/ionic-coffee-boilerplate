"use strict"

@angularCoffeeApp = angular.module "angularCoffeeApp", [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',

  'angularCoffeeApp.controllers',
  'angularCoffeeApp.directives',
  'angularCoffeeApp.filters',
  'angularCoffeeApp.resources',
  'angularCoffeeApp.services',
  'angularCoffeeApp.interceptors'
]

@controllerModule  = angular.module 'angularCoffeeApp.controllers', []
@directiveModule   = angular.module 'angularCoffeeApp.directives', []
@filterModule      = angular.module 'angularCoffeeApp.filters', []
@resourceModule    = angular.module 'angularCoffeeApp.resources', []
@serviceModule     = angular.module 'angularCoffeeApp.services', []
@configModule      = angular.module 'angularCoffeeApp.config', []
@interceptorModule = angular.module 'angularCoffeeApp.interceptors', []

@angularCoffeeApp.run ($rootScope, $state) ->
  # Do other stuff here as needed
  console.log "App started"
