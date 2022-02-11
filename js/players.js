
//Funcion juego suerte
const functions = {   
    random(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
}


//Declaración de la clase player
class player {

    constructor(nombre, vida, ataque, defensa) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa; 
        this.suerte = functions.random(1.20);

    }

    atack() {
        this.vida -= this.suerte;

        this.suerte=functions.random(1.20);
    }

};

//Players
let player1 = new player("Iron Man",200,60,70,1);
let player2 = new player("Capitán America",200,30,70,1);
let player3 = new player("Spiderman",200,40,50,1);
let player4 = new player("Thor",200,70,50,1);


let allPlayers = {
    1 : player1,
    2 : player2,
    3 : player3,
    4 : player4
}

//Generando variables básicas de entorno

let team1 = "";

let team2 = "";

