App.ResumeView = Ember.View.extend({
  didInsertElement: function() {
    backToNormal();
    blowUpResume();
  }
});