'use strict'

BASE_URL = 'http://localhost:9001/'

HomePage = ->
  @aboutLink = element By.css 'a[ui-sref="about"]'

  @get = ->
    browser.get BASE_URL

  return @


describe 'Home Page', ->
  homeP = new HomePage()

  beforeEach ->
    homeP.get()
    
  it 'has a link to the About Us page', ->
    expect(homeP.aboutLink.getText()).toBe 'About Us'

  it 'clicking on the About Us link goes to the About Us page', ->
    homeP.aboutLink.click()
    expect(browser.getLocationAbsUrl()).toBe '/about'