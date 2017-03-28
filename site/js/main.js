(function ($) {

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
		function sizeSpacer(spacer) {
    spacer.style.height = 0;
    var container = spacer.parentNode;
    var img = spacer.nextElementSibling || spacer.nextSibling;
    var lastContentNode = container.children[container.children.length - 1];
    var h = Math.max(0, container.clientHeight - img.clientHeight);
    spacer.style.height = h + "px";
    while (h > 0 && img.getBoundingClientRect().bottom > lastContentNode.getBoundingClientRect().bottom) {
        spacer.style.height = --h + "px";
    }
}


onload = onresize = function() {
    sizeSpacer(document.getElementById("sp1"));
		sizeSpacer(document.getElementById("sp2"));
		sizeSpacer(document.getElementById("sp3"));
};
	// local scroll
	 jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});

	// fancybox
	// jQuery(".fancybox").fancybox();

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
