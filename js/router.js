App.Router.map(function() {
  this.route('about_me');
  this.route('portfolio');
  this.route('contact');
  this.route('skill');
  this.route('resume');
});

App.IndexRoute = Ember.Route.extend({
  actions: {
    backToNormal: function() {
     backToNormal();
    }
  }
});

App.IndexController = Ember.ObjectController.extend({
  init: function(){
      backToNormal();
    }
});

/////////////// ABOUT ME ///////////////////////
///////////////////////////////////////////////
App.AboutMeRoute = Ember.Route.extend({
  model: function(params) {
    return AboutMe;
  },

  renderTemplate: function() {
    this.render('about-me', {
      outlet: 'about',
    });
  },

  actions: {
    backToNormal: function() {
      backToNormal();
    }
  }
});

/////////////// PORTFOLIO //////////////////////
///////////////////////////////////////////////
App.PortfolioRoute = Ember.Route.extend({
  model: function(params) {
    return Portfolio;
  },

  renderTemplate: function() {
    this.render('portfolio', {
      outlet: 'portfolio',
    });
  },

  actions: {
    backToNormal: function() {
      backToNormal();
    }
  }
});

/////////////// CONTACT ////////////////////////
///////////////////////////////////////////////
App.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return Contact;
  },
  renderTemplate: function() {
    this.render('contact', {
      outlet: 'contact',
    });
  },

  actions: {
    backToNormal: function() {
     backToNormal();
    }
  }
});

/////////////////// skill ///////////////////////
////////////////////////////////////////////////
App.SkillRoute = Ember.Route.extend({
  model: function(params) {
    return Skill;
  },

  renderTemplate: function() {
    this.render('skill', {
      outlet: 'skill',
    });
  },

  actions: {
    backToNormal: function() {
     backToNormal();
    }
  }
});

///////////////// RESUME ///////////////////////
///////////////////////////////////////////////
App.ResumeRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('resume', {
      outlet: 'resume',
    });
  },

  actions: {
    backToNormal: function() {
     backToNormal();
    }
  }
});

///////////////////// JQ ///////////////////////
///////////////////////////////////////////////
function blowUpAboutMe() {
	$('.about-me-link').removeClass('link').addClass('grow');
  $('.one').addClass('shrink-name');
  $('.name').addClass('pointer');
  $('.name p').hide();
  $('.link').addClass('shrink');
  $('.grey-border').addClass('build-about-me');
};

function blowUpContact() {
	$('.contact-link').removeClass('link').addClass('grow');
  $('.one').addClass('shrink-name');
  $('.name').addClass('pointer');
  $('.name p').hide();
  $('.link').addClass('shrink');
  $('.grey-border').addClass('build-contact');
};

function blowUpPortfolio() {
	$('.portfolio-link').removeClass('link').addClass('grow');
	$('.about-me-link').addClass('placement');
  $('.one').addClass('shrink-name');
  $('.name').addClass('pointer');
  $('.name p').hide();
  $('.link').addClass('shrink');
  $('.grey-border').addClass('build-portfolio');
};

function blowUpResume() {
	$('.resume-link').removeClass('link').addClass('grow');
	$('.contact-link').addClass('placement_for_resume')
  $('.one').addClass('shrink-name');
  $('.name').addClass('pointer');
  $('.name p').hide();
  $('.link').addClass('shrink');
  $('.grey-border').addClass('build-resume');
};

function blowUpSkill() {
  $('.skill-link').removeClass('link').addClass('grow');
  $('.contact-link').addClass('placement')
  $('.one').addClass('shrink-name');
  $('.name').addClass('pointer');
  $('.name p').hide();
  $('.link').addClass('shrink');
  $('.grey-border').addClass('build-skills');
};

function backToNormal() {
	$('.about-me-link').removeClass('placement').addClass('link');
	$('.contact-link').removeClass('placement').addClass('link');
  $('.contact-link').removeClass('placement_for_resume');
	$('.portfolio-link').addClass('link');
	$('.skill-link').addClass('link');
  $('.resume-link').addClass('link');
  $('.name').removeClass('pointer');
  $('.name p').fadeTo('slow', 1);
  $('.one').removeClass('shrink-name');
  $('.shrink').removeClass('shrink');
  $('.grow').removeClass('grow');
  $('.grey-border').removeClass('build-about-me');
  $('.grey-border').removeClass('build-contact');
  $('.grey-border').removeClass('build-portfolio');
  $('.grey-border').removeClass('build-resume');
  $('.grey-border').removeClass('build-skills');
};