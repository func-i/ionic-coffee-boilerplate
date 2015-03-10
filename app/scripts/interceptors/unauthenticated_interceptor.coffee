@angularIonicApp.factory 'unauthenticatedInterceptor', () ->
  
  responseError: (response) ->
    if response.status is 401
      # If you're not authenticated do something here
    else 
      response