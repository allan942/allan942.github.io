$(document).ready(function(){
	// jQuery Function Number 1
	$("#home").hide();
	$("#crawfish").hide();
	$("#shrimp").hide();
	$("#name").hide();
	$("#about").hide();
	$("#about2").hide();
	/*$(".circle").hide();*/

	// jQuery Function Number 2
	setTimeout(
    	function(){
        	$("#home").fadeTo(1000, .6);
    }, 2500);
    setTimeout(
    	function(){
        	$("#crawfish").fadeTo(1000, .6);
    }, 2500);
    setTimeout(
    	function(){
        	$("#shrimp").fadeTo(1000, .6);
    }, 2500);
    setTimeout(
    	function(){
        	$("#name").fadeIn(1500);
    }, 3500);
    setTimeout(
    	function(){
        	$("#about").fadeIn(1500);
    }, 5000);
    setTimeout(
    	function(){
        	$("#about2").fadeIn(1500);
    }, 8000);
    /*setTimeout(
    	function(){
        	$(".circle").fadeIn(1500);
    }, 11000);*/

    // jQuery Function Number 3
    $("#home").hover(
    	function() {
    		$("#home").fadeTo(50, 1);
    	}, function() {
    		$("#home").fadeTo(50, .6);
    	}
    );
    $("#crawfish").hover(
    	function() {
    		$("#crawfish").fadeTo(50, 1);
    	}, function() {
    		$("#crawfish").fadeTo(50, .6);
    	}
    );
    $("#shrimp").hover(
    	function() {
    		$("#shrimp").fadeTo(100, 1);
    	}, function() {
    		$("#shrimp").fadeTo(100, .6);
    	}
    );

    // jQuery Function Number 6
    // a bit ineffictient, but it works and I need the function lol
    $("#crawfish-pic").css("animation", "fadeInBackground 2s ease-in .5s");
    $("#crawfish-pic").css("animation-fill-mode", "forwards");
});
