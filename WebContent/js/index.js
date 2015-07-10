var affich = false;
var affichId = false;
var click = false;

$(document).ready(function(){
	$("#destination, #voyage").mouseover(dessus);
	$("#destination, #voyage").mouseleave(pasDessus);
	$("#identification").click(mouseEnterId);
	$("#ok").click(connexion);
});

function dessus(){
	if(affich==false){
		var liste = "#liste_" + $(this).attr("id");
		$(liste).slideToggle(true);
		affich=true;
	}
}

function pasDessus(){
	if(affich==true){
		var liste = "#liste_" + $(this).attr("id");
		$(liste).slideToggle(false);
		affich=false;
	}
}

function mouseEnterId(){
	if(!affichId){
		$("#user").focus();
		$(this).animate({ width : 215, height : 30},100);
		$(this).css("border-radius", "0 0 0 0");
		$("#connexion").slideToggle(true);
		affichId=true;
	}
}

//function mouseOutId(){
//	$(this).animate({ width : 198, height : 20},100);
//	$(this).css("border-radius", "0 0 0 5px");
//	$("#connexion").slideToggle(false);
//}

function connexion(){
	var user=$("#user").val();
	var pswd=$("#pswd").val();
	$("#connexion").toggle(false);
	$(this).animate({ width : 198, height : 20},100);
	$(this).css("border-radius", "0 0 0 5px");
	if (user == "Kineton" && pswd == "gencivesdeporc"){
		$("#empty").empty();
		$("#empty").html("Bonjour, Simon Jeremy");
	}
}