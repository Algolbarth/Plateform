import {Object} from "../Object.js";

export class Thunder extends Object {
    name = "Thunder";
    width = 30;
    height = 30;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision = function (object) {
        if (object.nature == "character" && object.type != "speed") {
            this.remove();
            object.type = "speed";
            object.speed = 5;
            if (object.height == 35) {
                object.height = 50;
                object.y -= 15;
            }
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#FFFF00";
        ctx.beginPath();
        ctx.moveTo(this.x + 15, this.y);
        ctx.lineTo(this.x + 5, this.y + 15);
        ctx.lineTo(this.x + 15, this.y + 15);
        ctx.lineTo(this.x + 10, this.y + 30);
        ctx.lineTo(this.x + 30, this.y + 10);
        ctx.lineTo(this.x + 20, this.y + 10);
        ctx.lineTo(this.x + 25, this.y);
        ctx.fill();
        ctx.closePath();
    };
}