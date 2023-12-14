sessionStorage.getItem("username");

function affichelead(){
httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = chargement;
httpRequest.open('GET', 'https://sae-301.azurewebsites.net/get-leaderboard.php', true);
httpRequest.send();
}

function chargement(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            finale = JSON.parse(httpRequest.responseText);
            console.log(httpRequest.responseText);
            position = 3;
            var pseudocoupe1 = finale[0]['username'];
            if (pseudocoupe1.length > 10) pseudocoupe1 = pseudocoupe1.slice(0, 10) +"...";
            var pseudocoupe2 = finale[1]['username'];
            if (pseudocoupe2.length > 10) pseudocoupe2 = pseudocoupe2.slice(0, 10) +"...";
            var pseudocoupe3 = finale[2]['username'];
            if (pseudocoupe3.length > 10) pseudocoupe3 = pseudocoupe3.slice(0, 10) +"...";

            lignejor = `<div class='lignej'>
            <div class="gauche">
                <img class="filtre" src="ressources/or.png">
                <p class='position'>1</p>
                <div class="separateur"></div>
                <p class='pseudo'>${pseudocoupe1}</p>
            </div>
            <div class="divetoile">
                <img class="etoile" src="ressources/etoile_top.png">
                <img class="etoile" src="ressources/etoile_top.png">
                <img class="etoile" src="ressources/etoile_top.png">
            </div>
            <div class="droite">
                <p class='score'>${finale[0]['score']}</p>
                <p class='pieces'>PIÈCES</p>
            </div>
        </div>`

            ligne1 = `<div class='ligne'>
            <div class="gauche">
                <img class="filtre" src="ressources/or.png">
                <p class='position'>1</p>
                <div class="separateur"></div>
                <p class='pseudo'>${pseudocoupe1}</p>
            </div>
            <div class="divetoile">
                <img class="etoile" src="ressources/etoile_top.png">
                <img class="etoile" src="ressources/etoile_top.png">
                <img class="etoile" src="ressources/etoile_top.png">
            </div>
            <div class="droite">
                <p class='score'>${finale[0]['score']}</p>
                <p class='pieces'>PIÈCES</p>
            </div>
        </div>`
            
            lignejargent = `<div class='lignej'>

            <div class="gauche">
                <img class="filtre" src="ressources/argent.png">
                <p class='position'>2</p>
                <div class="separateur"></div>
                <p class='pseudo'>${pseudocoupe2}</p>
            </div>
            <div class="divetoile">
                <img class="etoile" src="ressources/etoile_top.png">
                <img class="etoile" src="ressources/etoile_top.png">
            </div>
            <div class="droite">
                <p class='score'>${finale[1]['score']}</p>
                <p class='pieces'>PIÈCES</p>
            </div>
        </div>`

            ligne2 = `<div class='ligne'>

            <div class="gauche">
                <img class="filtre" src="ressources/argent.png">
                <p class='position'>2</p>
                <div class="separateur"></div>
                <p class='pseudo'>${pseudocoupe2}</p>
            </div>
            <div class="divetoile">
                <img class="etoile" src="ressources/etoile_top.png">
                <img class="etoile" src="ressources/etoile_top.png">
            </div>
            <div class="droite">
                <p class='score'>${finale[1]['score']}</p>
                <p class='pieces'>PIÈCES</p>
            </div>
        </div>`

            lignejbronze = `<div class='lignej'>
            <div class="gauche">
                <img class="filtre" src="ressources/bronze.png">
                <p class='position'>3</p>
                <div class="separateur"></div>
                <p class='pseudo'>${pseudocoupe3}</p>
            </div>
            <div class="divetoile">
                <img class="etoile" src="ressources/etoile_top.png">
            </div>
            <div class="droite">
                <p class='score'>${finale[2]['score']}</p>
                <p class='pieces'>PIÈCES</p>
            </div>
        </div>`

            ligne3 = `<div class='ligne'>
            <div class="gauche">
                <img class="filtre" src="ressources/bronze.png">
                <p class='position'>3</p>
                <div class="separateur"></div>
                <p class='pseudo'>${pseudocoupe3}</p>
            </div>
            <div class="divetoile">
                <img class="etoile" src="ressources/etoile_top.png">
            </div>
            <div class="droite">
                <p class='score'>${finale[2]['score']}</p>
                <p class='pieces'>PIÈCES</p>
            </div>
        </div>`

            if(sessionStorage.getItem("username") == finale[0]['username'])
                {
                    document.getElementById("1-50").innerHTML += lignejor;
                }
                else
                {
                document.getElementById("1-50").innerHTML += ligne1;
                }
            
            if(sessionStorage.getItem("username") == finale[1]['username'])
                {
                    document.getElementById("1-50").innerHTML += lignejargent;
                }
                else
                {
                document.getElementById("1-50").innerHTML += ligne2;
                }

            if(sessionStorage.getItem("username") == finale[2]['username'])
                {
                    document.getElementById("1-50").innerHTML += lignejbronze;
                }
                else
                {
                document.getElementById("1-50").innerHTML += ligne3;
                }

        
        
            for (let i = 3; i < finale.length && i < 50; i++){
                position++;
                var pseudocoupe = finale[i]['username'];
                if (pseudocoupe.length > 10){
                    pseudocoupe = pseudocoupe.slice(0, 10) +"...";
                }
                lignej = `<div class='lignej'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`

                ligne = `<div class='ligne'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`
                if(sessionStorage.getItem("username") == finale[i]['username'])
                {
                    document.getElementById("1-50").innerHTML += lignej;
                }
                else
                {
                document.getElementById("1-50").innerHTML += ligne;
                }
            }


            for (let i = 50; i < finale.length && i < 100; i++){
                position++;
                var pseudocoupe = finale[i]['username'];
                if (pseudocoupe.length > 10){
                    pseudocoupe = pseudocoupe.slice(0, 10) +"...";
                }
                lignej = `<div class='lignej'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`

                ligne = `<div class='ligne'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`
                if(sessionStorage.getItem("username") == finale[i]['username'])
                {
                    document.getElementById("50-100").innerHTML += lignej;
                }
                else
                {
                document.getElementById("50-100").innerHTML += ligne;
                }
            }

            for (let i = 100; i < finale.length && i < 150; i++){
                position++;
                var pseudocoupe = finale[i]['username'];
                if (pseudocoupe.length > 10){
                    pseudocoupe = pseudocoupe.slice(0, 10) +"...";
                }
                lignej = `<div class='lignej'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`

                ligne = `<div class='ligne'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`
                if(sessionStorage.getItem("username") == finale[i]['username'])
                {
                    document.getElementById("100-150").innerHTML += lignej;
                }
                else
                {
                document.getElementById("100-150").innerHTML += ligne;
                }
            }

            for (let i = 150; i < finale.length && i < 200; i++){
                position++;
                var pseudocoupe = finale[i]['username'];
                if (pseudocoupe.length > 10){
                    pseudocoupe = pseudocoupe.slice(0, 10) +"...";
                }
                lignej = `<div class='lignej'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`

                ligne = `<div class='ligne'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`
                if(sessionStorage.getItem("username") == finale[i]['username'])
                {
                    document.getElementById("150-200").innerHTML += lignej;
                }
                else
                {
                document.getElementById("150-200").innerHTML += ligne;
                }
            }

            for (let i = 200; i < finale.length && i < 250; i++){
                position++;
                var pseudocoupe = finale[i]['username'];
                if (pseudocoupe.length > 10){
                    pseudocoupe = pseudocoupe.slice(0, 10) +"...";
                }
                lignej = `<div class='lignej'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`

                ligne = `<div class='ligne'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`
                if(sessionStorage.getItem("username") == finale[i]['username'])
                {
                    document.getElementById("200-250").innerHTML += lignej;
                }
                else
                {
                document.getElementById("200-250").innerHTML += ligne;
                }
            }

            for (let i = 250; i < finale.length && i < 300; i++){
                position++;
                var pseudocoupe = finale[i]['username'];
                if (pseudocoupe.length > 10){
                    pseudocoupe = pseudocoupe.slice(0, 10) +"...";
                }
                lignej = `<div class='lignej'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`

                ligne = `<div class='ligne'>
                <div class="gauche">
                    <p class='position'>${position}</p>
                    <div class="separateur"></div>
                    <p class='pseudo'>${pseudocoupe}</p>
                </div>
                <div class="droite">
                    <p class='score'>${finale[i]['score']}</p>
                    <p class='pieces'>PIÈCES</p>
                </div>
            </div>`
                if(sessionStorage.getItem("username") == finale[i]['username'])
                {
                    document.getElementById("250-300").innerHTML += lignej;
                }
                else
                {
                document.getElementById("250-300").innerHTML += ligne;
                }
            }

            if(finale.length > 1){
                document.getElementById("zonejs").innerHTML += `<p onclick="classement(event)" class="couleurchiffre" id="chiffre1">1</p>`;
            }
            if(finale.length > 50){
                document.getElementById("zonejs").innerHTML += `<p onclick="classement(event)" class="couleurchiffrebase" id="chiffre2">2</p>`;
            }
            if(finale.length > 100){
                document.getElementById("zonejs").innerHTML += `<p onclick="classement(event)" class="couleurchiffrebase" id="chiffre3">3</p>`;
            }
            if(finale.length > 150){
                document.getElementById("zonejs").innerHTML += `<p onclick="classement(event)" class="couleurchiffrebase" id="chiffre4">4</p>`;
            }
            if(finale.length > 200){
                document.getElementById("zonejs").innerHTML += `<p onclick="classement(event)" class="couleurchiffrebase" id="chiffre5">5</p>`;
            }
            if(finale.length > 250){
                document.getElementById("zonejs").innerHTML += `<p onclick="classement(event)" class="couleurchiffrebase" id="chiffre6">6</p>`;
            }

        } else {
        alert('Il y a eu un problème avec la requête.');
        }
     }
 }


function classement(e){
    document.getElementsByClassName("couleurchiffre")[0].className = "couleurchiffrebase";
    e.srcElement.className = "couleurchiffre";
    element = e.srcElement.id;
    if(element == "chiffre1"){
        //e.srcElement.classList.add("couleurchiffre");
        hideall();
        document.getElementById("1-50").style.display = "flex";
        document.getElementById("1-50").classList.add("apparition");
    }
    if(element == "chiffre2"){
        //e.srcElement.classList.add("couleurchiffre");
        hideall();
        document.getElementById("50-100").style.display = "flex";
        document.getElementById("50-100").classList.add("apparition");
    }
    if(element == "chiffre3"){
        //e.srcElement.classList.add("couleurchiffre");
        hideall();
        document.getElementById("100-150").style.display = "flex";
        document.getElementById("100-150").classList.add("apparition");

    }
    if(element == "chiffre4"){
        //e.srcElement.classList.add("couleurchiffre");
        hideall();
        document.getElementById("150-200").style.display = "flex";
        document.getElementById("150-200").classList.add("apparition");

    }
    if(element == "chiffre5"){
        //e.srcElement.classList.add("couleurchiffre");
        hideall();
        document.getElementById("200-250").style.display = "flex";
        document.getElementById("200-250").classList.add("apparition");
    }
    if(element == "chiffre6"){
        //e.srcElement.classList.add("couleurchiffre");
        hideall();
        document.getElementById("250-300").style.display = "flex";
        document.getElementById("250-300").classList.add("apparition");
    }
}

function hideall(){
    document.getElementById("1-50").style.display = "none";
    document.getElementById("50-100").style.display = "none";
    document.getElementById("100-150").style.display = "none";
    document.getElementById("150-200").style.display = "none";
    document.getElementById("200-250").style.display = "none";
    document.getElementById("250-300").style.display = "none";
}



function fermer(){
    window. close()
}