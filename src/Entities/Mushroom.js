import {Entity} from "../Entity.js";

export class Mushroom extends Entity {
    name = "Mushroom";
    width = 30;
    height = 30;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision = function (object) {
        if (object == this.System.character && object.type == "little") {
            this.remove();
            object.type = "tall";
            object.height = 50;
            object.y -= 15;
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, 30, 20);
        ctx.fillStyle = "#EEE8AA";
        ctx.fillRect(this.x + 5, this.y + 20, 20, 10);
    };
}