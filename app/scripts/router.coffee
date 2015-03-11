'use strict'

@angularIonicApp.config ($urlRouterProvider, $stateProvider, $compileProvider, $httpProvider) ->
  
  $httpProvider.interceptors.push 'authenticatedInterceptor', 'unauthenticatedInterceptor'

  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state "home",
      url: "/"
      templateUrl: "views/home.html"
      controller: "HomeCtrl as homeCtrl"

    .state "about",
      url: "/about"
      templateUrl: "views/about.html"
      controller: "AboutCtrl as aboutCtrl"