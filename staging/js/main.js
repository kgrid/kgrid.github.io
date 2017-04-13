(function ($) {

		$("html").niceScroll({cursorwidth: '10', zindex: 9999,cursorcolor: "#e7e7e7", cursorborder:"1px solid #e7e7e7", cursorborderradius: "10px",autohidemode: false, zindex: 999 });

		$.force_appear();
	  //Manage button
			$('.navbar-collapse').on('hidden.bs.collapse', function () {
			  $("button.navbar-toggle>span").addClass("fa-bars");
				$("button.navbar-toggle>span").removeClass("fa-times");
				//	$(this).find('.navbar-nav').first().stop(true, true).slideUp(3000);
			});
			$('.navbar-collapse').on('show.bs.collapse', function () {
				$("button.navbar-toggle>span").removeClass("fa-bars");
				$("button.navbar-toggle>span").addClass("fa-times");
				//$(this).find('.navbar-nav').first().stop(true, true).slideDown(3000);

			});

	// spacer
	// function sizeSpacer(spacer) {
  //   spacer.style.height = 0;
  //   var container = spacer.parentNode;
  //   var img = spacer.nextElementSibling || spacer.nextSibling;
  //   var lastContentNode = container.children[container.children.length - 1];
  //   var h = Math.max(0, container.clientHeight - img.clientHeight);
  //   spacer.style.height = h + "px";
  //   while (h > 0 && img.getBoundingClientRect().bottom > lastContentNode.getBoundingClientRect().bottom) {
  //       spacer.style.height = --h + "px";
  //   }
	// }

	//text effect
	$("#texteff1").textillate({
		autoStart: true,
		loop: false,
		inEffects: [],
		outEffects:[],
			in: {
				effect: 'fadeIn',
				delay:5,
				delayScale: 1,
				type: 'word'
			},
			out: {
			    effect: 'fadeOut',
			    delayScale: 1,
			    delay: 5,
			    sync: true,
			    shuffle: false,
			    reverse: false,

			  },
		 });
	$("#texteff2").textillate({ in: { effect: 'fadeIn' ,delay:10, delayScale: 1} });
	$("#texteff3").textillate({ in: { effect: 'fadeIn' ,delay:10, delayScale: 1} });

	// $(".storywrapper").clone().appendTo(".story-appear");

onload = onresize = function() {
		jQuery('#amid-parent').height(jQuery('#amid-side').outerHeight());
		var maxHeight = 0;
  $(".use-detail").each(function() {
    if ($(this).outerHeight() > maxHeight) {
      maxHeight = $(this).outerHeight();
    }
  }).height(maxHeight);
    //  sizeSpacer(document.getElementById("sp1"));
		// // sizeSpacer(document.getElementById("sp2"));
		// sizeSpacer(document.getElementById("sp3"));
};
	// local scroll
	 jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});

	// fancybox
	// jQuery(".fancybox").fancybox();

	// if (Modernizr.mq("screen and (max-width:1024px)")) {
	// 		jQuery("body").toggleClass("body");
	// } else {
	// 	var s = skrollr.init({
	// 		mobileDeceleration: 1,
	// 		edgeStrategy: 'set',
	// 		forceHeight: true,
	// 		smoothScrolling: true,
	// 		smoothScrollingDuration: 300,
	// 			easing: {
	// 				WTF: Math.random,
	// 				inverted: function(p) {
	// 					return 1-p;
	// 				}
	// 			}
	// 		});
	// }

	jQuery('.nav li:first-child').addClass('active');
	//scroll menu
	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
	});


})(jQuery);
