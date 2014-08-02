console.log('\'Allo \'Allo!');

var pageid = null;

$(document).ready(function(){
	console.log($(".openbutton"));
	$(".openbutton").on("click",affichemenu);
	//$("li").on("click",changecolor);
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
			$("#p1").append("<a href='#' data-id='"+movies.Search[k].imdbID+"'>"+movies.Search[k].Title+"</a>");
			console.log(movies.Search[k]);
		}
		$("#p1 a").on("click", function(event) {
			event.preventDefault();
						console.log(event.currentTarget);

			rendermovie ( $(event.currentTarget).attr("data-id")); //$(objet jquery)
			/* Act on the event */
		});


	})
	.fail(function() { //error
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	$(".search").on("keyup",function(event) {
		console.log(event.currentTarget.value);
		SearchMovie(event.currentTarget.value);

		/* Act on the event */
	});



})

function SearchMovie (title){
	$.ajax({
		url: 'http://www.omdbapi.com/', // url de requete
		type: 'GET', //type de requete
		dataType: 'json', //foram de recup
		data: {s: title }, //parametre envoyer au serv
	})
	.done(function( movies) {
		console.log(movies);

	});	
}

function rendermovie (id){
	$.ajax({
		url: 'http://www.omdbapi.com/', // url de requete
		type: 'GET', //type de requete
		dataType: 'json', //foram de recup
		data: {i: id }, //parametre envoyer au serv
	})
	.done(function( movie) {
		console.log(movie);
		$("#p1 .title").html(movie.Title);
		$("#p1 .resum").html(movie.Plot);
		$("#p1 .poster").attr("src",movie.Poster);


	});


}
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

