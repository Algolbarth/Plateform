import {Solid} from "../Objet.js";

export class Brick extends Solid {
    name = "Brick";
    width = 40;
    height = 40;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision_y = function (objet) {
        if (objet.move_y > 0) {
            objet.y = this.y - objet.height;
            objet.can_jump = true;
            objet.move_y = 0;
        }
        else if (objet.move_y < 0) {
            objet.y = this.y + this.height;
            objet.move_y = 0;
            if (objet.height == 50) {
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