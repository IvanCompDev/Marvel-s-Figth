
//Funcion juego suerte
const functions = {   
    random(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
}


//Declaración de la clase player
class player {

    constructor(nombre, vida, defensa) {
        this.nombre = nombre;
        this.vida = vida;
        this.defensa = defensa; 
        this.suerte = functions.random(1.20);

    }

    ataque() {
        this.vida -= this.suerte;

        this.suerte=functions.random(1.20);
    }

};

//Players
let player1 = new player("Iron Man",200,70,1);
let player2 = new player("Capitán America",200,70,1);
let player3 = new player("Spiderman",200,50,1);
let player4 = new player("Thor",200,50,1);


let allPlayers = {
    1 : player1,
    2 : player2,
    3 : player3,
    4 : player4
}

//Generando variables básicas de entorno

let team1 = "";

let team2 = "";

