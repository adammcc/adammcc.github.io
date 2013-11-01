var app = app || {};

// Create a collection of blog posts
app.FeatureList = Backbone.Collection.extend({

  // Declare the model for this collection
  model: app.Feature
});
