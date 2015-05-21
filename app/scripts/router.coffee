'use strict'

@angularIonicApp.config ($urlRouterProvider, $stateProvider, $compileProvider, $httpProvider) ->
  
  $httpProvider.interceptors.push 'authenticatedInterceptor', 'unauthenticatedInterceptor'

  $urlRouterProvider.otherwise('/')
  
  $stateProvider
    .state "home",
      url: "/"
      templateUrl: "templates/home.html"
      controller: "HomeCtrl as homeCtrl"

    .state "about",
      url: "/about"
      templateUrl: "templates/about.html"
      controller: "AboutCtrl as aboutCtrl"