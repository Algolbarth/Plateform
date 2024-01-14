import {Object} from "../Object.js";

export class Coin extends Object {
    name = "Coin";
    width = 25;
    height = 25;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision = function (object) {
        if (object.nature == "character") {
            this.remove();
            this.System.map.coins++;
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#FFD700";
        ctx.fillRect(this.x, this.y, 25, 25);
        ctx.fillStyle = "#DAA520";
        ctx.fillRect(this.x + 10, this.y + 5, 5, 15);
    };
}