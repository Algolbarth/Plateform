export class Map {
    name;
    objects = [];
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

    addObject = function (name, args) {
        let c = this.System.objects.get(name);
        let o = new c(this.System, args);
        o.place = this.objects.length;
        if (name == "Coin") {
            this.max_coins++;
        }
        this.objects.push(o);
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
        this.addObject("Coin", [x + 7, y + 7]);
        this.addObject("Brick", [x, y]);
    };

    addFlag(x, y) {
        this.addObject("PoleFlag", [x + 19, y]);
        this.addObject("BaseFlag", [x, y + 400]);
    };
    
    addSpikeLine(x, y, number, style="up") {
        for (let i = 0; i < number; i++) {
            this.addObject("Spike", [x + i*25, y, style]);
        }
    };
}