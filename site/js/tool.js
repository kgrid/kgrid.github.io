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

	//scroll menu
		jQuery('.appear').appear();
		jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.sidenav li').removeClass('active');
			jQuery(".sidenav a[href='#" + id + "']").parent().addClass("active");
		});

})(jQuery);
