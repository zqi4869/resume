jQuery(function ($) {
	"use strict";

	//scroll sections
	$(".scroll").click(function (event) {
		event.preventDefault();
		$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
	});

	// JS circleGraphic File 
	$(".myStat").circliful();

	//Animate
	jQuery('.animate').appear();
	jQuery(document.body).on('appear', '.animate', function (e, $affected) {
		var fadeDelayAttr;
		var fadeDelay;
		jQuery(this).each(function () {
			if (jQuery(this).data("delay")) {
				fadeDelayAttr = jQuery(this).data("delay")
				fadeDelay = fadeDelayAttr;
			} else {
				fadeDelay = 0;
			}
			jQuery(this).delay(fadeDelay).queue(function () {
				jQuery(this).addClass('animated').clearQueue();
			});
		})
	});

});
