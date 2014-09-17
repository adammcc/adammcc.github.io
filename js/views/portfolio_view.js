App.PortfolioView = Ember.View.extend({
  didInsertElement: function() {
    backToNormal();
    blowUpPortfolio();
  }
});