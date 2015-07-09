var affich = false;

$(document).ready(function(){
	$("#destination, #voyage").mouseover(dessus);
	$("#destination, #voyage").mouseleave(pasDessus);
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