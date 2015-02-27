@angularCoffeeApp.factory 'authenticatedInterceptor', () ->
  
  request: (config) ->    
    # if the user is logged in, set it here
    #config.headers['Authorization'] = ""
    return config
