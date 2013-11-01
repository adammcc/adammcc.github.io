var app = app || {};


app.Router = Backbone.Router.extend({
  
  routes: {
    '': 'index', 
    'features/:slug': 'getFeature'
  },

  initialize: function() {
    var resume_content = '<iframe id="resume" class="sixteen columns" src="/resume/resume.html" scrolling="no"></iframe>';
    var portfolio_content = '<iframe id="portfolio" class="sixteen columns" src="portfolio.html" scrolling="no"></iframe>';
    var contact_content = '<iframe id="contact" class="sixteen columns" src="contact.html" scrolling="no"></iframe>';
    this.features = new app.FeatureList([
      new app.Feature({title: 'Resume', slug: 'resume', content: resume_content }),
      new app.Feature({title: 'Portfolio', slug: 'portfolio', content: portfolio_content }),
      new app.Feature({title: 'Contact', slug: 'contact', content: contact_content })
    ]);
  },

  index: function() {
    app.app_view = new app.AppView({collection: this.features});
    app.app_view.render();
  },

  getFeature: function(slug) {
    var feature = this.features.get(slug);
    var feature_view = new app.FeatureView({model: feature});
    feature_view.render();
  }
  
});
