$(document).ready(function(){

	$("#home").hide();
	$("#crawfish").hide();
	$("#shrimp").hide();
	$("#small").hide();
    $("h1").hide();
    $("#about").hide();
    $("#about2").hide();

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
        	$("#small").fadeIn(1500);
    }, 3500);
    setTimeout(
    	function(){
        	$("h1").fadeIn(1500);
    }, 4500);
    setTimeout(
        function(){
            $("#about").fadeIn(1500);
    }, 6000);
    setTimeout(
        function(){
            $("#about2").fadeIn(1500);
    }, 9000);

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
});
