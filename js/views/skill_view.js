App.SkillView = Ember.View.extend({
  didInsertElement: function() {
    backToNormal();
    blowUpSkill();
  }
});