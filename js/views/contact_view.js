App.ContactView = Ember.View.extend({
  didInsertElement: function() {
    backToNormal();
    blowUpContact();
  }
});