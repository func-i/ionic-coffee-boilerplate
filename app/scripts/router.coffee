'use strict'

@angularCoffeeApp.config ($urlRouterProvider, $stateProvider, $compileProvider, $httpProvider) ->
  
  $httpProvider.interceptors.push 'authenticatedInterceptor', 'unauthenticatedInterceptor'

  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state "home",
      url: "/"
      templateUrl: "views/home.html"
      controller: "HomeCtrl as homeCtrl"