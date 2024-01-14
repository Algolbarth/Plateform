import {Solid} from "../Object.js";

export class Brick extends Solid {
    name = "Brick";
    width = 40;
    height = 40;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
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
            if (object.height == 50) {
                this.remove();
            }
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#FF8C00";
        ctx.fillRect(this.x, this.y, 40, 40);
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y + 10, 40, 5);
        ctx.fillRect(this.x, this.y + 25, 40, 5);
        ctx.fillRect(this.x + 10, this.y, 5, 10);
        ctx.fillRect(this.x + 25, this.y + 15, 5, 10);
        ctx.fillRect(this.x + 10, this.y + 30, 5, 10);
    };
}