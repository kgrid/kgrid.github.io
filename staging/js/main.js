(function ($) {

		$("html").niceScroll({cursorwidth: '10', zindex: 9999,cursorcolor: "#e7e7e7", cursorborder:"1px solid #e7e7e7", cursorborderradius: "10px",autohidemode: false, zindex: 999 });

		$.force_appear();
	  //Manage button
		$('.navbar-collapse').on('hidden.bs.collapse', function () {
		  $("button.navbar-toggle>span").addClass("fa-bars");
			$("button.navbar-toggle>span").removeClass("fa-times");
		});

		$('.navbar-collapse').on('show.bs.collapse', function () {
			$("button.navbar-toggle>span").removeClass("fa-bars");
			$("button.navbar-toggle>span").addClass("fa-times");
		});

		onload = onresize = function() {
			jQuery('#amid-parent').height(jQuery('#amid-side').outerHeight());
			var maxHeight = 0;
			$(".use-detail").each(function() {
  			if ($(this).outerHeight() > maxHeight) {
    			maxHeight = $(this).outerHeight();
  			}
			}).height(maxHeight);
		};
	// local scroll
	 	jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});

		jQuery('.nav li:first-child').addClass('active');

		if (Modernizr.mq("screen and (max-width:1024px)")) {
					jQuery("body").toggleClass("body");
			} else {
				var s = skrollr.init({
					mobileDeceleration: 1,
					edgeStrategy: 'set',
					forceHeight: true,
					smoothScrolling: true,
					smoothScrollingDuration: 300,
						easing: {
							WTF: Math.random,
							inverted: function(p) {
								return 1-p;
							}
						}
					});
			}

	//scroll menu
		jQuery('.appear').appear();
		jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
		});

})(jQuery);
