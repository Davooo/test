console.log('\'Allo \'Allo!');

var pageid = null;

$(document).ready(function(){
	console.log($(".openbutton"));
	$(".openbutton").on("click",affichemenu);
	$("li").on("click",changecolor);
	$("li").on("click",changepage);

	$.ajax({
		url: 'http://www.omdbapi.com/', // url de requete
		type: 'GET', //type de requete
		dataType: 'json', //foram de recup
		data: {s: 'Star Wars'}, //parametre envoyer au serv
	})
	.done(function( movies) {	//succes
		console.log("succes");
		for (k in movies.Search){
			console.log(movies.Search[k].Title);
		}

	})
	.fail(function() { //error
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

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

