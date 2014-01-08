$(function() {
	$.fn.fullpage({
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		menu: false,
		autoScrolling: true,
		easing: 'swing'
	});

	$(".portfolio-link").on("click", function(){
		$.fn.fullpage.moveTo(2);
	});

	$(".contact-link").on("click", function(){
		$.fn.fullpage.moveTo(3);
	});

});




