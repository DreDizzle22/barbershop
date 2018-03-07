/*=============================================			
					SERVICES
==============================================*/

$(function(){
	//animate on scroll
	new WOW().init();
});

/*=============================================			
					WORK
==============================================*/
$(function(){
	 $("#work").magnificPopup({
		 
		 delegate: 'a', 
		 type: 'image',
		 gallery:{
			enabled: true
		 }		 
	});
});

/*=============================================			
					TEAM
==============================================*/
$(function(){
	 $("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	 });
});

/*=============================================			
					TESTIMONIALS
==============================================*/
$(function(){
	 $("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	 });
});

/*=============================================			
					NAVIGATION
==============================================*/
$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			$("nav").removeClass("barber-top-nav");
			$("#back-to-top").fadeOut();
		}
		else {
			$("nav").addClass("barber-top-nav");
			$("#back-to-top").fadeIn();
		}
	});
});

$(function () {
	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();
		var section = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});

$(function () {
	$(".navbar-collapse ul li a").on("click touch", function () {
		$(".navbar-toggle").click();

	});
});