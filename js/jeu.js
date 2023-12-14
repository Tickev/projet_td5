// SKIN ET SUCCES 

var sound = true;
var posx;
var x;
var y;
ost = new Audio("ressources/songmario.mp3");
piecesound = new Audio("ressources/piece.mp3");
luigisound = new Audio("ressources/Luigi.mp3");
peachsound = new Audio("ressources/Peach.mp3");
mariosound = new Audio("ressources/Mario.mp3");


document.addEventListener("keydown", (e) => {
	if(e.code === "Enter"){
		Clique();
	}
});

mario = "";
var piece = 0;


if (window.matchMedia("(width<577px)").matches) {
	console.log("zoubo2");
		function succes(){	
			if (document.getElementById('fenetre_succes').style.display ==  "none")
			{
				document.getElementById('fenetre_succes').style.display = "flex";

				document.getElementById('boutique').style.display = "flex";
				document.getElementById('fenetre_skin').style.display = "none";
			}
			else
				{
					document.getElementById('fenetre_succes').style.display = "none";
				}
		}


		function skin(){	
			if (document.getElementById('fenetre_skin').style.display ==  "none")
			{	
			document.getElementById('fenetre_skin').style.display = "flex";

			document.getElementById('boutique').style.display = "none";
			document.getElementById('fenetre_succes').style.display = "none";
			}
			else
				{
					document.getElementById('fenetre_skin').style.display = "none";
				}
		}

		
		function boutique(){	
			if (document.getElementById('boutique').style.display ==  "none")
			{	
			document.getElementById('boutique').style.display = "flex";

			document.getElementById('fenetre_skin').style.display = "none";
			document.getElementById('fenetre_succes').style.display = "none";
			}
			else
				{
					document.getElementById('boutique').style.display = "none";
				}
		}
		

				
		function ongletclassement(){
			window.open('classement.html', '_blank');

			document.getElementById('fenetre_succes').style.display = "none";
			document.getElementById('fenetre_skin').style.display = "none";
			document.getElementById('boutique').style.display = "none";
		}


	
	} else { /*quand la taille de l'ecran n'est pas égale à 576px*/
			
			function skin(){	
				if (document.getElementById('fenetre_skin').style.display ==  "none")
				{	
					document.getElementById('fenetre_skin').style.display = "flex";
					document.getElementById('fenetre_succes').style.display = "none";

					document.getElementById("menu_deroulant_skin").classList.toggle('js_skin');
				}
				else
				{
				document.getElementById('fenetre_skin').style.display = "none";
				}
			}


			function succes(){	
				if (document.getElementById('fenetre_succes').style.display ==  "none")
				{
					document.getElementById('fenetre_succes').style.display = "flex";
					document.getElementById('fenetre_skin').style.display = "none";

					document.getElementById("menu_deroulant_succes").classList.add('js_succes');
				}
				else
				{
				document.getElementById('fenetre_succes').style.display = "none";
				}
			}

			function ongletclassement(){
				window.open('classement.html', '_blank');

				document.getElementById('fenetre_succes').style.display = "none";
				document.getElementById('fenetre_skin').style.display = "none";
			}


	}
	




function verifuser(){
	if(sessionStorage.getItem("username") == null){
		document.location.href="index.html";
	}
}

function verifsession(){

	if (!sessionStorage.getItem("score"))
	sessionStorage.setItem("score", 0);
	document.getElementById("tscore").innerHTML = sessionStorage.getItem("score") + "&nbsp;";

	if (!sessionStorage.getItem("prixb1"))
	sessionStorage.setItem("prixb1", 100);
	document.getElementById("bonus1").innerHTML = sessionStorage.getItem("prixb1")+ "&nbsp;" +"<img class='pieceprix' src='ressources/piece.png'>";

	if (!sessionStorage.getItem("prixb2"))
	sessionStorage.setItem("prixb2", 100);
	document.getElementById("bonus2").innerHTML = sessionStorage.getItem("prixb2")+ "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";

	if (!sessionStorage.getItem("prixb3"))
	sessionStorage.setItem("prixb3", 10000);
	document.getElementById("bonus3").innerHTML = sessionStorage.getItem("prixb3")+ "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";

	if (!sessionStorage.getItem("nbbonus1"))
	sessionStorage.setItem("nbbonus1", 0);

	if (!sessionStorage.getItem("nbbonus2"))
	sessionStorage.setItem("nbbonus2", 0);

	if (!sessionStorage.getItem("nbbonus3"))
	sessionStorage.setItem("nbbonus3", 0);
}



function Clique(){
    sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))+1);
    sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))+10*sessionStorage.getItem("nbbonus1"));
	sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))+1000*sessionStorage.getItem("nbbonus3"));
    document.getElementById("tscore").innerHTML = sessionStorage.getItem("score") + "&nbsp;";
	conversion();
	verifsucces();
	piecesong();


	const div = document.createElement("div");
    div.innerHTML = '<div id="taillepieceanime">+1</div> <img src="ressources/piece.png">';
    div.id = 'animation-piece' ;
    document.body.appendChild(div);
	setTimeout(() => {
		document.getElementById("animation-piece").remove();
	}, 980);
}

function defautseconde(){
	sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))+1);
	conversion();
	verifsucces();
}


function intervalles(){
	verifsession();
	verifuser();
	veriffond();
	verifsucces();
	conversion();
	conversionprix();
	veriflive();

	setInterval(() => {
		sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))+10*sessionStorage.getItem("nbbonus2"));
		sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))+1000*sessionStorage.getItem("nbbonus3"));
		document.getElementById("tscore").innerHTML = parseInt(sessionStorage.getItem("score")) + "&nbsp;";
	  }, 1000);

	  setInterval(() => {
		defautseconde()
	  }, 1000);

	  setInterval(() => {
		checkup()
	  }, 100);

	  setInterval(() => {
		saveAPI()
	  }, 60000);

	  setInterval(() => {
		randomNumber()
	  }, 10000);
}


function bonus1(){
    if(parseInt(sessionStorage.getItem("score")) >= parseInt(sessionStorage.getItem("prixb1"))){
	sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))-parseInt(sessionStorage.getItem("prixb1")));
	sessionStorage.setItem("prixb1", Math.round(sessionStorage.getItem("prixb1")*1.5));
    sessionStorage.setItem("nbbonus1", parseInt(sessionStorage.getItem("nbbonus1"))+1);
	document.getElementById("rondmystere").classList.add("tourne");
	setTimeout(() => {
		document.getElementById("rondmystere").classList.remove("tourne");
	}, 400);
	conversion();
	verifsucces();
	veriffond("neige");
	document.getElementById("nbbonus1l").innerHTML = "&nbsp;" + parseInt(sessionStorage.getItem("nbbonus1"));
	document.getElementById("live1l").innerHTML = "+" + 10*sessionStorage.getItem("nbbonus1");
    }
    else{
    }
    document.getElementById("bonus1").innerHTML = sessionStorage.getItem("prixb1") + "<img src='ressources/piece.png'>";
	conversionprix();
}

function bonus2(){
    if(parseInt(sessionStorage.getItem("score")) >= parseInt(sessionStorage.getItem("prixb2"))){
	sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))-parseInt(sessionStorage.getItem("prixb2")));
	sessionStorage.setItem("prixb2", Math.round(sessionStorage.getItem("prixb2")*1.5));
    sessionStorage.setItem("nbbonus2", parseInt(sessionStorage.getItem("nbbonus2"))+1);
	document.getElementById("rondpiranha").classList.add("tourne");
	setTimeout(() => {
		document.getElementById("rondpiranha").classList.remove("tourne");
	}, 400);
	conversion();
	verifsucces();
	veriffond("degrade");
	document.getElementById("nbbonus2l").innerHTML = "&nbsp;" + parseInt(sessionStorage.getItem("nbbonus2"));
	document.getElementById("live2l").innerHTML = "+" + 10*sessionStorage.getItem("nbbonus2");
    }
    else{
    }
    document.getElementById("bonus2").innerHTML = sessionStorage.getItem("prixb2") + "<img src='ressources/piece.png'>";
	conversionprix();
}

function bonus3(){
    if(parseInt(sessionStorage.getItem("score")) >= parseInt(sessionStorage.getItem("prixb3"))){
	sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))-parseInt(sessionStorage.getItem("prixb3")));
	sessionStorage.setItem("prixb3", Math.round(sessionStorage.getItem("prixb3")*1.5));
    sessionStorage.setItem("nbbonus3", parseInt(sessionStorage.getItem("nbbonus3"))+1);
	document.getElementById("rondcarapace").classList.add("tourne");
	setTimeout(() => {
		document.getElementById("rondcarapace").classList.remove("tourne");
	}, 400);
	conversion();
	verifsucces();
	veriffond("nuit");
	document.getElementById("nbbonus3l").innerHTML = "&nbsp;" + parseInt(sessionStorage.getItem("nbbonus3"));
	document.getElementById("live3l").innerHTML = "+" + 1000*sessionStorage.getItem("nbbonus3");
	document.getElementById("live4l").innerHTML = "+" + 1000*sessionStorage.getItem("nbbonus3");
    }
    else{
    }
    document.getElementById("bonus3").innerHTML = sessionStorage.getItem("prixb3") + "<img src='ressources/piece.png'>";
	conversionprix();
}


function checkup(){
	if(parseInt(sessionStorage.getItem("score")) < parseInt(sessionStorage.getItem("prixb1"))){
		document.getElementById("bonus1").style.color = "red";
		document.getElementById("bonus1").disabled = true;
		document.getElementById("bloc_mystere").classList.add("grise");
	}
	else{
		document.getElementById("bonus1").style.color = "#FFFFFF";
		document.getElementById("bonus1").disabled = false;
		document.getElementById("bloc_mystere").classList.remove("grise");
	}

	if(parseInt(sessionStorage.getItem("score")) < parseInt(sessionStorage.getItem("prixb2"))){
		document.getElementById("bonus2").style.color = "red";
		document.getElementById("bonus2").disabled = true;
		document.getElementById("bloc_plante").classList.add("grise");
	}
	else{
		document.getElementById("bonus2").style.color = "#FFFFFF";
		document.getElementById("bonus2").disabled = false;
		document.getElementById("bloc_plante").classList.remove("grise");
	}

	if(parseInt(sessionStorage.getItem("score")) < parseInt(sessionStorage.getItem("prixb3"))){
		document.getElementById("bonus3").style.color = "red";
		document.getElementById("bonus3").disabled = true;
		document.getElementById("bloc_carapace").classList.add("grise");
	}
	else{
		document.getElementById("bonus3").style.color = "#FFFFFF";
		document.getElementById("bonus3").disabled = false;
		document.getElementById("bloc_carapace").classList.remove("grise");
	}
}

function conversion(){
	if(parseInt(sessionStorage.getItem("score")) / 10000 >= 1){
		document.getElementById("tscore").innerHTML = (sessionStorage.getItem("score")/1000).toFixed(2)+"K" + "&nbsp;";
	}

	if(parseInt(sessionStorage.getItem("score")) / 1000000 >= 1){
		document.getElementById("tscore").innerHTML = (sessionStorage.getItem("score")/1000000).toFixed(1)+"M" + "&nbsp;";
	}

	if(parseInt(sessionStorage.getItem("score")) / 1000000000 >= 1){
		document.getElementById("tscore").innerHTML = (sessionStorage.getItem("score")/1000000000).toFixed(1)+"Md" + "&nbsp;";
	}
}

function conversionprix(){
	if(parseInt(sessionStorage.getItem("prixb1")) / 10000 >= 1){
		document.getElementById("bonus1").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb1")/1000).toFixed(2)+"K" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb1")) / 1000000 >= 1){
		document.getElementById("bonus1").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb1")/1000000).toFixed(2)+"M" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb1")) / 1000000000 >= 1){
		document.getElementById("bonus1").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb1")/1000000000).toFixed(2)+"Md" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb2")) / 10000 >= 1){
		document.getElementById("bonus2").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb2")/1000).toFixed(2)+"K" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb2")) / 1000000 >= 1){
		document.getElementById("bonus2").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb2")/1000000).toFixed(2)+"M" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb2")) / 1000000000 >= 1){
		document.getElementById("bonus2").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb2")/1000000000).toFixed(2)+"Md" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb3")) / 10000 >= 1){
		document.getElementById("bonus3").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb3")/1000).toFixed(2)+"K" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb3")) / 1000000 >= 1){
		document.getElementById("bonus3").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb3")/1000000).toFixed(2)+"M" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";;
	}

	if(parseInt(sessionStorage.getItem("prixb3")) / 1000000000 >= 1){
		document.getElementById("bonus3").innerHTML = "&nbsp;" + (sessionStorage.getItem("prixb3")/1000000000).toFixed(2)+"Md" + "&nbsp;" + "<img class='pieceprix' src='ressources/piece.png'>";
	}
}


function changementskin(){
	if (document.getElementById("btn_skinm").checked) {
		document.getElementById("ligneskinm").style.background = "linear-gradient(48deg, rgba(255,255,255,1) 0%, rgb(8, 81, 190) 100%)";
		document.getElementById("ligneskinp").style.background = "#E9F9FF";
		document.getElementById("ligneskinl").style.background = "#E9F9FF";
		if(sound == true){
		document.getElementById("mario").src = "ressources/mario.png"
		mariosound.volume = 0.4;
		mariosound.play();
		}
		else{
			document.getElementById("mario").src = "ressources/mario.png"
		}
	}

	if (document.getElementById("btn_skinl").checked) {
		document.getElementById("ligneskinl").style.background = "linear-gradient(48deg, rgba(255,255,255,1) 0%, rgba(22,131,4,1) 100%)";
		document.getElementById("ligneskinp").style.background = "#E9F9FF";
		document.getElementById("ligneskinm").style.background = "#E9F9FF";

		if(sound == true){
		document.getElementById("mario").src = "ressources/luigi.png"
		luigisound.volume = 0.4;
		luigisound.play();
		}
		else{
			document.getElementById("mario").src = "ressources/luigi.png"
		}
	}

	if (document.getElementById("btn_skinp").checked) {
		document.getElementById("ligneskinp").style.background = "linear-gradient(48deg, rgba(255,255,255,1) 0%, rgba(255,136,205,1) 100%)";
		document.getElementById("ligneskinm").style.background = "#E9F9FF";
		document.getElementById("ligneskinl").style.background = "#E9F9FF";
		if(sound == true){
		document.getElementById("mario").src = "ressources/peach.png"
		peachsound.volume = 0.4;
		peachsound.play();
		}
		else{
			document.getElementById("mario").src = "ressources/peach.png"
		}
	}
	
}


function verifsucces(){
	if(parseInt(sessionStorage.getItem("score")) >= 10 && document.getElementById("succes1").style.backgroundColor != "rgb(87, 205, 46)"){
		animation();
		document.getElementById("succes1").style.backgroundColor = "#57CD2E";
		document.getElementById("succes1").style.opacity = "1";
		document.getElementById("succes1").style.boxShadow = "-7px 0px 12px 2px rgba(38,255,47,0.37)";
	}
	if(parseInt(sessionStorage.getItem("score")) >= 1000 && document.getElementById("succes2").style.backgroundColor != "rgb(87, 205, 46)"){
		animation();
		document.getElementById("succes2").style.backgroundColor = "#57CD2E";
		document.getElementById("succes2").style.opacity = "1";
		document.getElementById("succes2").style.boxShadow = "-7px 0px 12px 2px rgba(38,255,47,0.37)";
	}
	if(parseInt(sessionStorage.getItem("score")) >= 100000 && document.getElementById("succes3").style.backgroundColor != "rgb(87, 205, 46)"){
		animation();
		document.getElementById("succes3").style.backgroundColor = "#57CD2E";
		document.getElementById("succes3").style.opacity = "1";
		document.getElementById("succes3").style.boxShadow = "-7px 0px 12px 2px rgba(38,255,47,0.37)";
	}
	if((parseInt(sessionStorage.getItem("nbbonus1")) >= 1 || parseInt(sessionStorage.getItem("nbbonus2")) >= 1 || parseInt(sessionStorage.getItem("nbbonus3")) >= 1) && document.getElementById("succes4").style.backgroundColor != "rgb(87, 205, 46)"){
		animation();
		document.getElementById("succes4").style.backgroundColor = "#57CD2E";
		document.getElementById("succes4").style.opacity = "1";
		document.getElementById("succes4").style.boxShadow = "-7px 0px 12px 2px rgba(38,255,47,0.37)";
	}
}

function veriffond(e){
    if(e == "neige" && sessionStorage.getItem("nbbonus1") == 1){
        document.body.style.backgroundImage = "url('./ressources/"+e+".png')";
    } else if (e == "degrade" && sessionStorage.getItem("nbbonus2") == 1){
        document.body.style.backgroundImage = "url('./ressources/"+e+".png')";
    } else if (e == 'nuit' && sessionStorage.getItem("nbbonus3") == 1){
        document.body.style.backgroundImage = "url('./ressources/"+e+".png')";
    } else if (e == ""){
        document.body.style.backgroundImage = "url('./ressources/fondbase.png')";
    }
}

function veriflive(){
	document.getElementById("nbbonus1l").innerHTML = "&nbsp;" + parseInt(sessionStorage.getItem("nbbonus1"));
	document.getElementById("live1l").innerHTML = "+" + 10*sessionStorage.getItem("nbbonus1");
	document.getElementById("nbbonus2l").innerHTML = "&nbsp;" + parseInt(sessionStorage.getItem("nbbonus2"));
	document.getElementById("live2l").innerHTML = "+" + 10*sessionStorage.getItem("nbbonus2");
	document.getElementById("nbbonus3l").innerHTML = "&nbsp;" + parseInt(sessionStorage.getItem("nbbonus3"));
	document.getElementById("live3l").innerHTML = "+" + 1000*sessionStorage.getItem("nbbonus3");
	document.getElementById("live4l").innerHTML = "+" + 1000*sessionStorage.getItem("nbbonus3");
}

function onoff(){
	if(sound == true){
	document.getElementById("soundlogo").src = "ressources/son_off.png";
	sound = false;
	ost.volume = 0.0;
	piecesound.volume = 0.0;
	}
	else{
	if(sound == false){
	document.getElementById("soundlogo").src = "ressources/son_on.png";
	sound = true;
	ost.volume = 0.2;
	piecesound.volume = 0.05;
	}
}
}

function saveAPI(){
	sauvegarde();
}

function sauvegarde(){
httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = requete;
httpRequest.open('POST', 'https://sae-301.azurewebsites.net/save-score.php', true);
httpRequest.setRequestHeader('Content-Type', 'application/json');
var data = JSON.stringify({"username":sessionStorage.getItem("username"), "score":sessionStorage.getItem("score"), "force":true});
httpRequest.send(data);
}

function requete(){
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		if (httpRequest.status === 200) {
			document.getElementById("textesauvegarde").className = "opacity1";
			setTimeout(() => {
				document.getElementById("textesauvegarde").className = "opacity0";
			}, 3000);
	
		} else {
			alert('Il y a eu un problème avec la requête.');
		        }    
			}
		}


function randomNumber(){
    var aleatoire = Math.round(Math.random() * (0 - 10) + 10);

    posx = Math.round(Math.random() * (150 - 1265) + 1120);
    if(aleatoire == 5){
        creervie();
    }
}

document.onclick = function(f){
    x = f.clientX;
    y = f.clientY;
}

function touche(){
    document.getElementById("taillevie").remove();
	clearTimeout(timeout);
	sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score"))+10000);
	document.getElementById("tscore").innerHTML = sessionStorage.getItem("score") + "&nbsp;";
	conversion();
    setTimeout(() => {
        document.getElementById("gain").style.top = y+"px";
    	document.getElementById("gain").style.left = x-58+"px";
    	document.getElementById("gain").style.display = "flex";
    }, 10);
    setTimeout(() => {
        document.getElementById("gain").style.display = "none";
    }, 1000);
}

function creervie(){
    document.body.innerHTML += `<img draggable="false" onclick="touche()" id="taillevie" src="ressources/vie.png"></img>`;
    document.getElementById("taillevie").style.left = posx+"px";
    timeout = setTimeout (() => {
        	document.getElementById("taillevie").remove();
    		},4000);
}




/*BONUS 1*/
function explication_bonus1(){
	document.getElementById("details_bonus1").style.display = "flex";
}

function fermer_explications1(){
	document.getElementById("details_bonus1").style.display = "none";
}

document.onmousemove = suit_souris;
function suit_souris(evenement){
var x =  evenement.pageX;
var y =  evenement.pageY;

}



/*BONUS 2*/
function explication_bonus2(){
	document.getElementById("details_bonus2").style.display = "flex";
}

function fermer_explications2(){
	document.getElementById("details_bonus2").style.display = "none";
}

document.onmousemove = suit_souris;
function suit_souris(evenement){
var x =  evenement.pageX;
var y =  evenement.pageY;

}


/*BONUS 3*/
function explication_bonus3(){
	document.getElementById("details_bonus3").style.display = "flex";
}

function fermer_explications3(){
	document.getElementById("details_bonus3").style.display = "none";
}




document.onmousemove = suit_souris;
function suit_souris(evenement){
var x =  evenement.pageX;
var y =  evenement.pageY;
document.getElementById("details_bonus3").style.left = (x+-70)+'px';
document.getElementById("details_bonus3").style.top  = (y-200)+'px';

document.getElementById("details_bonus2").style.left = (x+-70)+'px';
document.getElementById("details_bonus2").style.top  = (y-200)+'px';

document.getElementById("details_bonus1").style.left = (x+-70)+'px';
document.getElementById("details_bonus1").style.top  = (y-200)+'px';

}

function animation(){
	document.getElementById("succesunlocked").className = "opacity1";
	document.getElementById("idtrophee").className = "animatetrophee";
		setTimeout(() => {
		document.getElementById("succesunlocked").className = "opacity0";
		document.getElementById("idtrophee").classList.remove("animatetrophee");
		}, 3000);
}

function themesong(){
	if(sound == true){
	ost.volume = 0.2;
	ost.play();
	}
}

function piecesong(){
	if(sound == true){
		piecesound.volume = 0.05;
		piecesound.play();
	}
}

