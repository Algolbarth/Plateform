import {Solid} from "../Object.js";

export class Spike extends Solid {
    name = "Spike";
    width = 25;
    height = 25;
    style = "up";

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
        this.style = args[2];
    };

    collision_x = function (object, move_x) {
        if (move_x > 0) {
            object.x = this.x - object.width;
            if (object.nature == "entity") {
                object.move_x = -move_x;
            }
        }
        else if (move_x < 0) {
            object.x = this.x + this.width;
            if (object.nature == "entity") {
                object.move_x = -move_x;
            }
        }
        if (object.nature == "character") {
            object.damage(this.System);
        }
    };

    collision_y = function (object) {
        if (object.move_y > 0) {
            object.y = this.y - object.height;
            object.can_jump = true;
            object.move_y = 0;
        }
        else if (object.move_y < 0) {
            object.y = this.y + this.height;
            object.move_y = 0;
        }
        if (object.nature == "character") {
            object.damage(this.System);
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#808080";
        ctx.beginPath();
        switch (this.style) {
            case "up":
                ctx.moveTo(this.x, this.y + this.height);
                ctx.lineTo(this.x + this.width/2, this.y);
                ctx.lineTo(this.x + this.width, this.y + this.height);
                break;
            case "down":
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.width, this.y);
                ctx.lineTo(this.x + this.width/2, this.y + this.height);
                break;
        }
        ctx.fill();
        ctx.closePath();
    };
}