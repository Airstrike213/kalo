$(document).ready(function(){

	$("body .info-teaser.container .close-button").click(function(){
		$(this).parents(".info-teaser").find(".closed-teaser").show();
		$(this).parents(".info-teaser").find(".important-teaser").hide();

	});
	$("body .info-teaser.container .closed-teaser").hover(function(){
		$(this).find(".animate-svg").hide();
		$(this).find(".blue-svg").addClass("active");
	});
	$("body .info-teaser.container .closed-teaser").mouseleave(function(){
		$(this).find(".blue-svg").removeClass("active");
		$(this).find(".animate-svg").show();
	});
	$("body .infografik.container .building .element_wrapper .element").hover(function(){
		$(this).find("svg:nth-child(1)").hide();
		$(this).find("svg:nth-child(2)").show();
	});
	$("body .infografik.container .building .element_wrapper .element").mouseleave(function(){
		$(this).find("svg:nth-child(1)").show();
		$(this).find("svg:nth-child(2)").hide();
	});
	var flag = false;
	$("body .infografik.container .building .element_wrapper .element").bind('touchstart click', function(){
		if (!flag) {
			flag = true;
			setTimeout(function(){ flag = false; }, 100);
			$("body .infografik.container .building .modal").hide();
			var id = $(this).parent().attr("class");
			var modalid = $.trim(id.replace('element_wrapper', ''));
			$("body .infografik.container .building").find("#"+modalid).css('display','table');
		}

		return false
	});
	$("body .infografik.container .building .modal .close-modal").click(function() {
		$(this).parent(".modal").hide();
	});

	$("body .modal_opener").bind('touchstart click', function(){
		var modal_to_open = "#"+$(this).attr('id')+"_modal";
		$(modal_to_open).show();
	});
});	