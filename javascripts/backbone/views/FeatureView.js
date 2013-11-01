var app = app || {};

app.FeatureView = Backbone.View.extend({
  el: $('#main'),

  render: function() {
    var template = Handlebars.compile($('#feature-view-template').html());
    this.$el.html(template(this.model.toJSON()));
  }

});