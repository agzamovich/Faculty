$( document ).ready(function() {

$('.dropdown-menu a').keydown(function(e){
    switch(e.which){
        case 36: // home
            e.preventDefault();
            $(this).closest('.dropdown-menu').find('a:first').focus();
            break;
        case 35: // end
            e.preventDefault();
            $(this).closest('.dropdown-menu').find('a:last').focus();
            break;
    }
});

$(".moreBox").slice(0, 3).show();
		if ($(".blogBox:hidden").length != 0) {
			$("#loadMore").show();
		}
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 6).slideDown();
			if ($(".moreBox:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
        $("#view-all-news").show();
			}
		});
	

				
				$(".sidebar a.active-nav").parents('li').addClass("active-parent");
				$(".active-parent button").attr("aria-expanded","true");
				$(".active-parent button").removeClass("collapsed");
				$(".active-parent ul").addClass("nav collapse in");
				
	
	


});
