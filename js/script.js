$(window).on("load", function() {
	$(".preloader").fadeOut("slow");
	console.log("loading");
});

// scroll header bg animation start
$(document).ready(function() {
	$(window).scroll(function() {
		var ptop = $(document).scrollTop();
		console.log(ptop);
		if (ptop > 50) {
			$("header").addClass("dark");
		} else {
			$("header").removeClass("dark");
		}
	});
});
$(document).ready(function() {
	$("#mob-btn").click(function() {
		$("#mob-menu").show();
		$(".nav-back").slideDown();
		$(".mobnav ul").show();
	});
	$("#close").click(function() {
		$("#mob-menu").slideUp("slow");
		$(".nav-back").slideUp();
		$(".mobnav ul").hide();
	});
	$(".mobnav ul li a").click(function() {
		$("#mob-menu").fadeOut();
	});
});

$(document).ready(function() {
	$(".js-filter").on("click", function() {
		var $filter = $(this).attr("data-name");

		if ($filter == "all") {
			$(".js-filterable").removeClass("is-hidden");
		} else {
			$(".js-filterable").addClass("is-hidden");
			$(".js-filterable[data-name=" + $filter + "]").removeClass(
				"is-hidden"
			);
		}
	});
});
