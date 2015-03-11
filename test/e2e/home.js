(function() {
  var BASE_URL, homePage;

  BASE_URL = 'http://localhost:9001/';

  homePage = function() {
    this.aboutLink = element(By.css('a[ui-sref="about"]'));
    this.get = function() {
      return browser.get(BASE_URL);
    };
    return this;
  };

  describe('Home Page', function() {
    var homeP;
    homeP = new homePage();
    beforeEach(function() {
      return homeP.get();
    });
    it('has a link to the About Us page', function() {
      return expect(homeP.aboutLink.getText()).toBe('About Us');
    });
    return it('clicking on the About Us link goes to the About Us page', function() {
      homeP.aboutLink.click();
      return expect(browser.getLocationAbsUrl()).toBe('/about');
    });
  });

}).call(this);

//# sourceMappingURL=home.js.map
