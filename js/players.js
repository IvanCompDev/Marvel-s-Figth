
//Declaración de la clase player
class player {

    constructor(nombre, vida, ataque, defensa, foto) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.frenada = frenada;
        this.foto = foto;
    }

    atacar() {
        return this.ataque += 30;
    }

    defender() {
        return this.defensa = 0;
    }

    recibirDaño = (recibirDaño) => {
        this.vida -= recibirDaño;
    }

};

//Instanciando corredores...

let player1 = new player("Iron Man",240,60,70);
let player2 = new player("Hulk",250,50,40);
let player3 = new player("Thor",260,50,30);
let player4 = new player("Viuda Negra",200,50,40);
let player5 = new player("Capitan America",220,30,70);
let player6 = new player("Spiderman",190,40,50);
let player7 = new player("Bruja Escarlata",180,70,60);
let player8 = new player("Groot",170,70,50);

//Generando variables básicas de entorno

let allPlayers = [player1,player2,player3,player4,player5,player6,player7,player8];

let team1 = [];

let team2 = [];

let ganador = "";