App.AboutMeView = Ember.View.extend({
  didInsertElement: function() {
    backToNormal();
    blowUpAboutMe();
  }
});