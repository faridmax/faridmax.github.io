$(document).ready(function() {
	$(".button-floating").click(function(){
	var t=$("#wrapper");
	t.hasClass("button-floating-clicked")||(t.attr("class","center"),
		t.toggleClass("button-floating-clicked-out"))
	,t.toggleClass("button-floating-clicked"),
	$(".button-sub").click(function() {
		var c=$(this).data("color");
	t.attr("class","center button-floating-clicked button-floating-clicked-out"),
	t.addClass("button-sub-"+c+"-clicked")
})})});