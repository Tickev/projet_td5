// function pourca(){
// 	httpRequest = newXMLHttpRequest();
// 	httpRequest.onreadystatechange = enregistrement;
// 	httpRequest.open('GET', 'https://sae-301.azurewebsites.net/save-score.php', true);
// 	httpRequest.send();
// }	

// function enregistrement(){
// if (httpRequest.readyState === XMLHttpRequest.DONE){
// 	if (httpRequest.status === 200){
// 		alert(httpRequest.responseText);    

// 		console.log(pseudo);
// 		var pseudo = document.getElementById("champs_pseudo").value;
// 	}
	
// 	else{
// 		alert('Problème avec la requête');
// 		}    
// 	}
// }

document.addEventListener("keyup", (e) => {
	if(e.code === "Enter"){
		getpseudo();
	}
})

function getpseudo(){
	username = document.getElementById("champs_pseudo").value
	sessionStorage.setItem("username", username);
	document.location.href="jeu.html";
}



// bouton cliquable ou non
function clicounon(champs_pseudo){
	
	if(champs_pseudo.value == "", champs_pseudo.value.length < 5){
		document.getElementById("cta_jouer").disabled = true;
	}
	
	else{	
		document.getElementById("cta_jouer").disabled = false;
	}
}
