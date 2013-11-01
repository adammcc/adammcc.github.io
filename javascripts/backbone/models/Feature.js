var app = app || {};


app.Feature = Backbone.Model.extend({
  idAttribute: 'slug',
  
  defaults: {
    title: 'New feature',
    content: 'Content'
  }
});
