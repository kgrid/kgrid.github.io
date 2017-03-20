(function ($) {
	var scrollbarwidth=getScrollbarWidth();
	var viewportWidth = $(window).width()+scrollbarwidth;
	var viewportHeight = $(window).height()+scrollbarwidth;

	var adjratio=0.15;
	if(viewportWidth>767) {
		adjratio=0.75;
	}else if(viewportWidth>576){
		adjratio=0.45;
	}else if(viewportWidth>320){
		adjratio=0.25;
	}
	var navOffset = $("#kgridlogo").offset().top;
  $("#kgridlogo").wrap('<div id="logowrapper"></div>');

	var scrollManager = {
			logowrapper:$("#logowrapper"),
			kgridlogo:$("div#kgridlogo"),
			navbar:$(".navbar"),
			onScroll:function(){
					//Manage logo
					var self =this;
					var scrolltop = $(window).scrollTop();
					var klogotop= self.kgridlogo.offset().top - scrolltop;
					var w=(1-(navOffset-klogotop)*adjratio/navOffset)*100;
					if(w>100) w=100;
					console.log("L-Top@"+klogotop+" W-Top@"+scrolltop+" N-Offset@"+navOffset+" w="+w);
					self.logowrapper.height($("#kgridlogo").outerHeight());
					self.kgridlogo.css("width",w+"%");
					console.log("Div width="+$("div#kgridlogo").height());
					if(scrolltop<=navOffset){
								self.kgridlogo.removeClass("fixed");
								self.navbar.css("background-color","transparent");
					}else{
								self.kgridlogo.addClass("fixed");
								self.navbar.css("background-color","#fff");
					}

				}
	};

	$(window).scroll(_.throttle(function(){scrollManager.onScroll();}, 10));

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

			$(window).resize(function(){
				var viewportWidth = $(window).width()+scrollbarwidth;
				var viewportHeight = $(window).height()+scrollbarwidth;
				console.log("Width: "+viewportWidth+"   Height: "+viewportHeight);
				adjratio=0.45;
				if(viewportWidth>767) {
					adjratio=0.75;
				}
				// $("html, body").animate({ scrollTop: 0 }, 1000);
				// navOffset = $("#kgridlogo").offset().top;
			});


		// $('.scrollup').click(function(){
		// 	$("html, body").animate({ scrollTop: 0 }, 1000);
		// 		return false;
		// });

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

	//Scroll to show/hide stories
	jQuery(".story-appear").appear();
	jQuery(".story-appear").on("appear", function(data) {
			$(this).addClass("active");
	});
	jQuery(".story-appear").on("disappear", function(data) {
 			$(this).removeClass("active");
	});

	function getScrollbarWidth() {
	    var outer = document.createElement("div");
	    outer.style.visibility = "hidden";
	    outer.style.width = "100px";
	    document.body.appendChild(outer);

	    var widthNoScroll = outer.offsetWidth;
	    // force scrollbars
	    outer.style.overflow = "scroll";

	    // add innerdiv
	    var inner = document.createElement("div");
	    inner.style.width = "100%";
	    outer.appendChild(inner);

	    var widthWithScroll = inner.offsetWidth;

	    // remove divs
	    outer.parentNode.removeChild(outer);

	    return widthNoScroll - widthWithScroll;
	}
})(jQuery);
