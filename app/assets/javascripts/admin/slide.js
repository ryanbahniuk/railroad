$(document).ready(function(){
	var mobileMenuOpen = false;
	$('.mobile-menu-icon').on("click", function(){
		mobileMenuOpen = switchMenu(mobileMenuOpen);
	});
	$(window).resize(function(){
		checkWindowSize(mobileMenuOpen, 899);
	});
});

var switchMenu = function(mobileMenuOpen){
	var width = $('#admin-bar').width();
	var animateSpeed = 200;

	if (mobileMenuOpen) {
		$('.admin-container').animate({
	    left: 0
	  }, animateSpeed);
	  $('.mobile-menu-icon').animate({
	    left: "10px"
	  }, animateSpeed);
		return false;
	} else {
		$('.admin-container').animate({
	    left: width + "px"
	  }, animateSpeed);
	  $('.mobile-menu-icon').animate({
	    left: width + 10 + "px"
	  }, animateSpeed);
		return true;
	}
}

var checkWindowSize = function(mobileMenuOpen, breakpoint){
	var windowWidth = $(window).width();

	if (windowWidth > breakpoint) {
		if (mobileMenuOpen) {
			return switchMenu(true)
		}
	}
}