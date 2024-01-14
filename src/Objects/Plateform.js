import {Object} from "../Object.js";

export class Plateform extends Object {
    name = "Plateform";
    height = 10;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
        this.width = args[2];
    };

    collision_y = function (object) {
        if (object.move_y > 0) {
            if (!object.fall) {
                object.y = this.y - object.height;
                object.can_jump = true;
                object.move_y = 0;
            }
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#DAA520";
        ctx.fillRect(this.x, this.y, this.width, 10);
        ctx.fillStyle = "#000000";
        for (let n = 1; n < this.width/20; n++) {
            ctx.fillRect(this.x + 20*n, this.y, 2, 10);
        }
    };
}