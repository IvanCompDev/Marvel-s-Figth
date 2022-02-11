//Limpieza del juego 

const cleanGame = () => {

    window.location.reload();
  
changeScreen(1);
}

//Cambio de pantalla 

const changeScreen = (change) => {

    let selectedScreen = "screen" + change;

    let arrayScreens = ["screen1", "screen2", "screen3", "screen4"];

    
    arrayScreens = arrayScreens.filter(val => !selectedScreen.includes(val));
    
    document.getElementById(selectedScreen).style.display = "block";
   
    for(let screen of arrayScreens) {
        document.getElementById(screen).style.display = "none";
    }

}



//Seleccion de jugadores

const selectPlayer = (nPlayer) => {
    
    if(team1 == ""){
        team1 = allPlayers[nPlayer];
        let PlayerPrimero = document.getElementById(nPlayer);
        let datosPlayer = document.getElementById("data"+ 1);
        PlayerPrimero.onclick = "";
        PlayerPrimero.classList.add("perSeleccion");
        datosPlayer.innerHTML = `${team1.nombre}`;
    
        
    } else if (team2 == ""){
        team2 = allPlayers[nPlayer];
        let PlayerSegundo = document.getElementById(nPlayer);
        PlayerSegundo.onclick = "";
        PlayerSegundo.classList.add("perSeleccion");

        setTimeout(()=>{
            changeScreen(3);
            displayGame();
        }, 1000);
    }
}

//Screen 3

let img1 = document.getElementById("imgFighter1");
let img2 = document.getElementById("imgFighter2");

let statsTeam1 = document.getElementById("stats1");
let statsTeam2 = document.getElementById("stats2");

let winner = document.getElementById("winner");
   
const displayGame= () => {
    img1.innerHTML = `<img class="fighter1" src="img/${team1.nombre}.png" alt="fighter1" >`;
    img2.innerHTML = `<img class="fighter2" src="img/${team2.nombre}.png" alt="fighter2" >`;

    statsTeam1.innerHTML = `<div class="vidaBar"><div id="vidaBar1"></div>`;
    statsTeam2.innerHTML = `<div class="vidaBar"><div id="vidaBar2"></div>`;
}


//LUCHA

const fight= () => {

    team1.atack();
    team2.atack();
    
    
    if(team1.vida <= 0) {  

        changeScreen(4);
        
        winner.innerHTML = ` El ganador es Team 2  ${team2.nombre}`;
    } 
    if(team2.vida <= 0) {

        changeScreen(4);

        winner.innerHTML = ` El ganador es Team 1 ${team1.nombre}`;
    }

    statsTeam1.innerHTML = `<div class="vidaBar"><div id="vidaBar1"></div>`;
    statsTeam2.innerHTML = `<div class="vidaBar"><div id="vidaBar2"></div>`;
    document.getElementById("vidaBar1").style.width = `${team1.vida}`+"%";
    document.getElementById("vidaBar2").style.width = `${team2.vida}`+"%";

}




