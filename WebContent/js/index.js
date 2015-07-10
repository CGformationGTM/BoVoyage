var affich = false;
var enFocus = false;

$(document).ready(function(){
	$("#destination, #voyage").mouseover(dessus);
	$("#destination, #voyage").mouseleave(pasDessus);
	$("#identification").mouseover(mouseEnterId);
	$("#identification").mouseleave(mouseOutId);
	$("#connexion > input").focusin(function(){enFocus=true;});
	$("#connexion > input").focusout(function(){
		enFocus=false;
		mouseOutId();
		});
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
	if(!affich){
		$(this).animate({ width : 215, height : 30},100);
		$(this).css("border-radius", "0 0 0 0");
		$("#connexion").slideToggle(true);
		affich=true;
	}
}

function mouseOutId(){
	if(enFocus){
		return;
	}
	if(affich){
		$(this).animate({ width : 198, height : 20},100);
		$(this).css("border-radius", "0 0 0 5px");
		$("#connexion").slideToggle(false);
		affich=false;
	}
}