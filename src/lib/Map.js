export class Map {
    name;
    objets = [];
    entities = [];
    ennemy = 0;
    max_ennemy = 0;
    coins = 0;
    max_coins = 0;
    width = 0;
    height = 0;
    background_color = "#000000";
    System;

    constructor(System) {
        this.System = System;
    };

    addObjet = function (name, args) {
        let c = this.System.objets.get(name);
        let o = new c(this.System, args);
        o.place = this.objets.length;
        if (name == "Coin") {
            this.max_coins++;
        }
        this.objets.push(o);
    };

    addEntity = function (name, args) {
        let c = this.System.entities.get(name);
        let o = new c(this.System, args);
        o.place = this.entities.length;
        if (o.ennemy) {
            this.max_ennemy++;
        }
        this.entities.push(o);
    };

    addCoinBrick(x, y) {
        this.addObjet("Coin", [x + 7, y + 7]);
        this.addObjet("Brick", [x, y]);
    };

    addFlag(x, y) {
        this.addObjet("PoleFlag", [x + 19, y]);
        this.addObjet("BaseFlag", [x, y + 400]);
    };
    
    addSpikeLine(x, y, number, style="up") {
        for (let i = 0; i < number; i++) {
            this.addObjet("Spike", [x + i*25, y, style]);
        }
    };
}