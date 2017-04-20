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

		jQuery('.sidenav li:first-child').addClass('active');

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
			jQuery('.sidenav li').removeClass('active');
			jQuery(".sidenav a[href='#" + id + "']").parent().addClass("active");
		});

		$(window).scroll(_.throttle(function(){
				var st = $(window).scrollTop();
				var id = $(".sidenav>li.active:first>a").attr("href");
				var pos = $(id).offset();
				var h = $(id).outerHeight();
				var ratio = (pos.top+h-st)/h;
				if(ratio<0) {
					ratio=0;
				}if(ratio>1){
						ratio=1;
				}

				var stub_h= 40*ratio;
				console.log("Window:"+st+" "+ id+ " T:"+pos.top+" H:"+h+"R:"+ratio);


				 $(".sidenav>li.active>span.stub").css("height",stub_h+"px");


		},50))

})(jQuery);
