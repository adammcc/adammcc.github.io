var app = app || {};

app.FeatureListView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click': 'view'
  },

  initialize: function() {
  },

  render: function() {
    var template = Handlebars.compile($('#feature-list-view-template').html());
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

 
  view: function() {
    var slug =  this.model.get('slug');
    app.router.navigate('features/' + slug, true);
  }
});
