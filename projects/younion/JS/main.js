function enter()
{
$("#wrapanim").fadeOut(200);

//BANNIERE
$("#younion").animate({"left": "0px"}, 600);
$("#makeus").animate({"left": "510px"}, 600);
$('#separateur').fadeIn(1200);

//OUVERTURE SUR LE SITE FAÇON PAPYRUS

//Apparition des menus et footers
$('#menu').fadeIn(1200);
$('#footer').fadeIn(1200);

//Ouverture Papyrus
setTimeout(function(){
$("#main").animate({"height" : "335px"}, 1000);
$("#menu").animate({"marginTop" : "15px"}, 1000);}, 1200);

//Fade In texte footer/menus
setTimeout(function(){
		$('.menu').fadeIn(1000);
		$('#footer').animate({"color" : "#fff"},1000);
}, 2200);


//CONTENT
setTimeout(function(){
		$(".content").animate({"left" : "1000px"}, 1);		
		$("#content-jeu").animate({"left": "300px"}, 2100);
		$("#content-accueil").animate({"left": "1000px"},1);
		$("#content-missions").animate({"left": "1000px"}, 1);
		$("#content-equipe").animate({"left": "1000px"}, 1);
},1500);
	
//SOUSMENU
setTimeout(function(){
	setTimeout(function(){$("#elem13").animate({"left": "1px"}, 600);},1300);
	setTimeout(function(){$("#elem14").animate({"left": "1px"}, 600);},1500);
},1900);

}
		var anim = false;
	if (anim == false) {
		setTimeout("enter()", 28000);
		anim = true;
	}
	function ouvrirJeu()
            {
                maPopup = window.open("game.html");
                maPopup.focus();
                maPopup.onbeforeunload = function(){fermetureJeu();};
            }
	function fermetureJeu()
            {
                document.getElementById("text").innerHTML = "Bravo !";
            }
	$(document).ready(function() {
		enter();


	$("#skipA").click(function() {
	});
	$("#skipG").click(function() {
		window.close();
	});

	//MENU
	$("#accueil").click(function(){
			//ANIMATION CONTENU
		$("#content-equipe").animate({"left": "1000px"}, 600);
		$("#content-missions").animate({"left": "1000px"}, 600);
		$("#content-jeu").animate({"left": "1000px"}, 600);
		setTimeout(function(){$("#content-accueil").animate({"left": "300px"}, 600);},600);		
		
			//SOUS MENU
		setTimeout(function(){$("#elem5").animate({"left": "-300px"}, 600);$("#elem9").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem6").animate({"left": "-300px"}, 600);$("#elem10").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem7").animate({"left": "-300px"}, 600);$("#elem11").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem8").animate({"left": "-300px"}, 600);$("#elem12").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem13").animate({"left": "-300px"}, 600);$("#elem14").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem1").animate({"left": "1px"}, 600);},1200);
		setTimeout(function(){$("#elem2").animate({"left": "1px"}, 600);},1400);
		setTimeout(function(){$("#elem3").animate({"left": "1px"}, 600);},1600);
		setTimeout(function(){$("#elem4").animate({"left": "1px"}, 600);},1800);
	});
	
	$("#equipe").click(function(){
			//ANIMATION CONTENU
		$("#content-accueil").animate({"left": "1000px"}, 600);
		$("#content-missions").animate({"left": "1000px"}, 600);
		$("#content-jeu").animate({"left": "1000px"}, 600);
		setTimeout(function(){$("#content-equipe").animate({"left": "300px"}, 600);},600);

			//SOUS MENU
		setTimeout(function(){$("#elem1").animate({"left": "-300px"}, 600);$("#elem9").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem2").animate({"left": "-300px"}, 600);$("#elem10").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem3").animate({"left": "-300px"}, 600);$("#elem11").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem4").animate({"left": "-300px"}, 600);$("#elem12").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem13").animate({"left": "-300px"}, 600);$("#elem14").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem5").animate({"left": "1px"}, 600);},1200);
		setTimeout(function(){$("#elem6").animate({"left": "1px"}, 600);},1400);
		setTimeout(function(){$("#elem7").animate({"left": "1px"}, 600);},1600);
		setTimeout(function(){$("#elem8").animate({"left": "1px"}, 600);},1800);
	});
	
	$("#missions").click(function(){
			//ANIMATION CONTENU 
		$("#content-accueil").animate({"left": "1000px"}, 600);
		$("#content-equipe").animate({"left": "1000px"}, 600);
		$("#content-jeu").animate({"left": "1000px"}, 600);
		setTimeout(function(){$("#content-missions").animate({"left": "300px"}, 600);},600);

			//SOUS MENU
		setTimeout(function(){$("#elem1").animate({"left": "-300px"}, 600);$("#elem5").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem2").animate({"left": "-300px"}, 600);$("#elem6").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem3").animate({"left": "-300px"}, 600);$("#elem7").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem4").animate({"left": "-300px"}, 600);$("#elem8").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem13").animate({"left": "-300px"}, 600);$("#elem14").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem9").animate({"left": "1px"}, 600);},1200);
		setTimeout(function(){$("#elem10").animate({"left": "1px"}, 600);},1400);
		setTimeout(function(){$("#elem11").animate({"left": "1px"}, 600);},1600);
		setTimeout(function(){$("#elem12").animate({"left": "1px"}, 600);},1800);
	});
	
		$("#jeu").click(function(){
			//ANIMATION CONTENU 
		$("#content-accueil").animate({"left": "1000px"}, 600);
		$("#content-equipe").animate({"left": "1000px"}, 600);
		$("#content-missions").animate({"left": "1000px"}, 600);
		setTimeout(function(){$("#content-jeu").animate({"left": "300px"}, 600);},600);

			//SOUS MENU
		setTimeout(function(){$("#elem1").animate({"left": "-300px"}, 600);$("#elem5").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem2").animate({"left": "-300px"}, 600);$("#elem6").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem3").animate({"left": "-300px"}, 600);$("#elem7").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem4").animate({"left": "-300px"}, 600);$("#elem8").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem9").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem10").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem11").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem12").animate({"left": "-300px"}, 600);},600);
		setTimeout(function(){$("#elem13").animate({"left": "1px"}, 600);},1200);
		setTimeout(function(){$("#elem14").animate({"left": "1px"}, 600);},1400);

	});
	
	
	
	
	//SUBMENU
	
	$("#elem1").click(function(){
		$("#content-accueil").animate({scrollTop: 0}, 2000,'easeInOutCubic');
	});
	
	$("#elem2").click(function(){
		$("#content-accueil").animate({scrollTop: 335}, 2000,'easeInOutCubic');
	});
	
	$("#elem3").click(function(){
		$("#content-accueil").animate({scrollTop: 670}, 2000,'easeInOutCubic');
	});
	
	$("#elem4").click(function(){
		$("#content-accueil").animate({scrollTop: 1005}, 2000,'easeInOutCubic');
	});	
	$("#elem5").click(function(){
		$("#content-equipe").animate({scrollTop: 0}, 2000,'easeInOutCubic');
	});
	
	$("#elem6").click(function(){
		$("#content-equipe").animate({scrollTop: 335}, 2000,'easeInOutCubic');
	});
	
	$("#elem7").click(function(){
		$("#content-equipe").animate({scrollTop: 670}, 2000,'easeInOutCubic');
	});
	
	$("#elem8").click(function(){
		$("#content-equipe").animate({scrollTop: 1005}, 2000,'easeInOutCubic');
	});	
	$("#elem9").click(function(){
		$("#content-missions").animate({scrollTop: 0}, 2000,'easeInOutCubic');
	});
	
	$("#elem10").click(function(){
		$("#content-missions").animate({scrollTop: 335}, 2000,'easeInOutCubic');
	});
	
	$("#elem11").click(function(){
		$("#content-missions").animate({scrollTop: 670}, 2000,'easeInOutCubic');
	});
	
	$("#elem12").click(function(){
		$("#content-missions").animate({scrollTop: 1005}, 2000,'easeInOutCubic');
	});	
	
	$("#elem14").click(function(){
		ouvrirJeu();
	});
	
});

