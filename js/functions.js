var showCurrys = function(){
	$(".currys-link").click(function(event){
		event.preventDefault();
		if($("#currys").hasClass("hide-block")){
			$(".hide-block").addClass("show-block").removeClass("hide-block");
			$("#section2").addClass("expanded");
	}
		else{
			$(".show-block").addClass("hide-block").removeClass("show-block");
			
		}
	})

}

showCurrys();

var navScroll = function(){

$(".nav-link").click(function(event){
	event.preventDefault();
	var navHeight = $('.navbar').height();
	var getLocation = $(this).attr("href");
	$('html, body').animate({
	        scrollTop: $(getLocation).offset().top - navHeight
	    }, 1000);
	console.log(getLocation);



	switch(getLocation){
		case "#section0":
			$(".nav-link").removeClass('active2');
			$(this).addClass("active2");

		break;

		case "#section1":
			$(".nav-link").removeClass('active2');
			$(this).addClass("active2");

		break;

		case "#section2":
			$(".nav-link").removeClass('active2');
			$(this).addClass("active2");
		break;

		case "#section3":
			$(".nav-link").removeClass('active2');
			$(this).addClass("active2");
		break;

		case "#section4":
			$(".nav-link").removeClass('active2');
			$(this).addClass("active2");
		break;

		default:
		$(".nav-link").removeClass("active2");
	}

	var dataLink = $(this).attr("data-href");
	switch(dataLink){

		case "#homeland":
		$(".side-nav").find("a").removeClass('active2');
		$(dataLink).addClass("active2");
		break;

		case "#about":
		$(".side-nav").find("a").removeClass('active2');
		$(dataLink).addClass("active2");
		break;

		case "#portfolio":
		$(".side-nav").find("a").removeClass('active2');
		$(dataLink).addClass("active2");
		break;

		case "#ux":
		$(".side-nav").find("a").removeClass('active2');
		$(dataLink).addClass("active2");
		break;

		case "#contact":
		$(".side-nav").find("a").removeClass('active2');
		$(dataLink).addClass("active2");
		break;

		default:
		$(".side-nav").find("a").removeClass('active2');
		console.log("switchfail")

	}


})
}

navScroll();

console.log($('.navbar').height());
	

