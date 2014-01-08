$(function() {
	$.fn.fullpage({
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		menu: false,
		autoScrolling: true,
		easing: 'swing'
	});


	var homeLink = $('.home-link');
	var contactLink = $(".contact-link")
	var portfolioLink = $(".portfolio-link");

	homeLink.on('click', function() {
		$.fn.fullpage.moveTo(1)
	})

	portfolioLink.on("click", function(){
		$.fn.fullpage.moveTo(2);
	});

	contactLink.on("click", function(){
		$.fn.fullpage.moveTo(3);
	});

});




