var app = app || {}


app.AppView = Backbone.View.extend({
  el: $('#main'),

  
  initialize: function() {
    this.$el.html($('#app-view-template').html());
    this.$list = $('#features');
  },

  render: function() {
    this.collection.each(function(feature) {
      var view = new app.FeatureListView({model: feature});
      this.$list.append(view.render().el);
    }, this); 
    return this;
  }

});
