(function ($) {

	var scrollbarwidth=getScrollbarWidth();
	var viewportWidth = $(window).width()+scrollbarwidth;
	var viewportHeight = $(window).height()+scrollbarwidth;
		console.log(scrollbarwidth+"Width: "+viewportWidth+"   Height: "+viewportHeight);
	var reftop=50;
	var adjratio=1.5;
	var sizew=45;
	if(viewportWidth>767) {
		reftop=120;
		adjratio=1.7;
		sizew=35;
	}
	var klogotop= $('#kgridlogo').offset().top - $(window).scrollTop()
	console.log("Start at:"+klogotop);

  //Manage button
	$('.navbar-collapse').on('hidden.bs.collapse', function () {
	  $("button.navbar-toggle>span").addClass("fa-bars");
		$("button.navbar-toggle>span").removeClass("fa-times");
	});
	$('.navbar-collapse').on('show.bs.collapse', function () {
		$("button.navbar-toggle>span").removeClass("fa-bars");
		$("button.navbar-toggle>span").addClass("fa-times");
	});

	$(window).resize(function(){
		var viewportWidth = $(window).width()+scrollbarwidth;
		var viewportHeight = $(window).height()+scrollbarwidth;
		console.log("Width: "+viewportWidth+"   Height: "+viewportHeight);
	});


	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}

			//Manage logo
			var klogotop= $('#kgridlogo').offset().top - $(window).scrollTop()
			var w=(1-(reftop-klogotop)/reftop/adjratio)*100;
			if(w>100) w=100;
			var h= $("div#kgridlogo img").height();
			console.log("top@"+klogotop+" w="+w);

			if(w>sizew){
						$("div#kgridlogo img").css("width",w+"%");
						$("a.navbar-brand").removeClass("show");
						$("#navlogo").parent().parent().css("background-color","transparent");
			}else{
						$("a.navbar-brand").addClass("show");
						$("#navlogo").parent().parent().css("background-color","#fff");
			}

		});

		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});

	// local scroll
	jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});

	// fancybox
	jQuery(".fancybox").fancybox();

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
