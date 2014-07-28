console.log('\'Allo \'Allo!');

$(document).ready(function(){
	console.log($(".openbutton"));
	$(".openbutton").on("click",affichemenu);
	$("li").on("click",changecolor);
})

function affichemenu() {
	if ($("nav").hasClass("inactive")){
		$("nav").removeClass("inactive");	

	}
	else{
		$("nav").addClass("inactive");
		$("body").css("background","white");

		}
}

function changecolor( event ) {
	console.log(event);
	var color = $(event.currentTarget).attr("data-color");
	$("body").css("background",color);
}


