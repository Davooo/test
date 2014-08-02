console.log('\'Allo \'Allo!');

var pageid = null;

$(document).ready(function(){
	console.log($(".openbutton"));
	$(".openbutton").on("click",affichemenu);
	$("li").on("click",changecolor);
	$("li").on("click",changepage);
})

function affichemenu() {
	if ($("nav").hasClass("inactive")){
		$("nav").removeClass("inactive");
	}
	else{
		$("nav").addClass("inactive");
		$("body").css("background","white");
		$("div#"+pageid).removeClass("show");
		pageid = null;
	}
}

function changecolor( event ) {
	// console.log(event);
	var color = $(event.currentTarget).attr("data-color");
	$("body").css("background",color);
}
function changepage ( event) {
	if ( pageid != null){
		$("div#"+pageid).removeClass("show");
	}
	pageid = $(event.currentTarget).attr("data-pageid");
	$("div#"+pageid).addClass("show");
}