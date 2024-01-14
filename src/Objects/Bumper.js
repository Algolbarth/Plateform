import {Solid} from "../Object.js";

export class Bumper extends Solid {
    name = "Bumper";
    width = 100;
    height = 20;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision_y = function (object) {
        if (object.move_y > 0) {
            object.y = this.y - object.height;
            if (object.jumping) {
                object.move_y = -17;
            }
            else if (object.fall) {
                object.move_y = -7;
            }
            else {
                object.move_y = -12;
            }
        }
        else if (object.move_y < 0) {
            object.y = this.y + this.height;
            object.move_y = 0;
        }
    };
    
    draw = function (ctx) { 
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, 100, 5);
        ctx.fillStyle = "#7F3300";
        ctx.fillRect(this.x, this.y + 5, 100, 10);
        ctx.fillRect(this.x + 10, this.y + 15, 10, 5);
        ctx.fillRect(this.x + 80, this.y + 15, 10, 5);
    };
}