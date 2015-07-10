function checkmdp (){
	if (($("#mdp").val()) == ($("#mdpBis").val())){
		$("#err_mdpBis").css("visibility","hidden");		
	}
	else {
		$("#err_mdpBis").css("visibility","visible");
	}
}

$(document).ready(function(){
	
	
	$ ("input").blur(function(){
		var spanId = "#err_"+$(this).attr("id");
		if($(this).val() == ""){			
			$(spanId).css("visibility","visible");
		}
		else { 
			var spanId = "#err_"+$(this).attr("id");
			$(spanId).css("visibility","hidden");	
		}
		$ ("#mdpBis").blur(checkmdp);
		
	});
	

		
});
