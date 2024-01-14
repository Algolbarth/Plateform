import {Object, Solid} from "../Object.js";
import {goWin} from "../Win.js";

export class BaseFlag extends Solid {
    name = "BaseFlag";
    width = 50;
    height = 50;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(this.x, this.y + 10, 50, 40);
        for (let n = 0; n < 3; n++) {
            ctx.fillRect(this.x + n * 20, this.y, 10, 10);
        }
    };
}

export class PoleFlag extends Object {
    name = "PoleFlag";
    width = 12;
    height = 450;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision = function (object) {
        if (object.nature == "character") {
            goWin(this.System);
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x + 3, this.y, 6, 450);
        ctx.fillRect(this.x, this.y, 12, 12);
    };
}