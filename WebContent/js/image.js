var numImg = 1;


$(document).ready(start)
	

var delai = 5000;
var compteur = 1;
var timer = null

function start() {
	document.getElementById("image").src = "image/image1.jpg";
	timer = setInterval(afficherImage, delai);
}

function afficherImage() {
	document.getElementById("image").src = "image/image" + compteur + ".jpg";
	src = "image" + compteur + ".jpg";
//	$("#image").attr("src",src).delay(3000).fadeOut(2000).delay(1000)
//	$("#image").attr("src",src).fadeIn(3000);
	compteur += 1;
	if (compteur > 3){
		compteur = 1
	}
}