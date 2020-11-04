function getWeekdoneService() {
    // Create a new service with the given name. The name will be used when
    // persisting the authorized token, so ensure it is unique within the
    // scope of the property store.
    return OAuth2.createService('weekdone')
  
        // Set the endpoint URLs from your oauth2 provider
        .setAuthorizationBaseUrl('https://weekdone.com/oauth_authorize')
        .setTokenUrl('https://weekdone.com/oauth_token')
  
        // Set the client ID and secret from your oauth2 provider.
        .setClientId(CLIENT_ID)
        .setClientSecret(CLIENT_SECRET)
  
        // Set the name of the callback function in the script referenced
        // above that should be invoked to complete the OAuth flow.
        .setCallbackFunction('authCallback')
  
        // Set the property store where authorized tokens should be persisted.
        .setPropertyStore(PropertiesService.getUserProperties())
        
        // Enable caching to avoid exhausting property store quotas
        .setCache(CacheService.getUserCache())
}

function authCallback(request) {
  var weekdoneService = getWeekdoneService();
  var isAuthorized = weekdoneService.handleCallback(request);
  if (isAuthorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
}