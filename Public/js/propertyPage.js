//scroll to the top of the page when the gallery is entered
$(function(){
	/*$("#button-top").on("click", function() {
        alert('Please wait while form is submitting');
        $("#button-top").hide();
    });*/
	
	//Check to see if the window is top if not then display button
	/*$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});*/
	
	//Click event to scroll to top
	$('#openModal').click(function(){
		$('html, body').animate({scrollTop : 0},400);
		$("#lightbox").open();
		return false;
	});
	
});