(function ($) {
		$('.navbar-collapse').on('hidden.bs.collapse', function () {
		  $(".navbar-toggle").removeClass("active");
				$('body').css('overflow', 'scroll');
				$('body').css('position', 'relative');
		});
		$('.navbar-collapse').on('show.bs.collapse', function () {
			$(".navbar-toggle").addClass("active");
				$('body').css('overflow', 'hidden');
				$('body').css('position', 'fixed');
		});

		onload = onresize = function() {
			var viewport_width = $(window).width();
			var viewport_height = $(window).height();
			if(viewport_width>=320){
				var maxHeight = 0;
				$(".use-detail").each(function() {
					$(this).css("height","auto");
	  			if ($(this).outerHeight() > maxHeight) {
			 			maxHeight = $(this).outerHeight();
	  			}
				}).height(maxHeight);
				var maxHeight1=0;
				$(".component-title").each(function() {
					$(this).css("height","auto");
					if ($(this).outerHeight() > maxHeight1) {
						maxHeight1 = $(this).outerHeight();
					}
				}).height(maxHeight1);
			}else{
				$(".use-detail").each(function() {
					$(this).css("height","auto");
				});
			}
			if(viewport_width>991){
				$(".navbar-nav-m").css("height","auto");
				}else{
				$(".navbar-nav-m").height(viewport_height-60);
			}
		};
})(jQuery);
