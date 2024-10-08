import {Entity} from "../Entity.js";

export class Goumba extends Entity {
    name = "Goumba";
    ennemy = true;
    width = 35;
    height = 35;
    move_x = -1;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision_x = function (objet) {
        if (objet.nature == "character") {
            objet.damage(this.System);
        }
    };

    collision_y = function (objet) {
        if (objet.move_y > 0) {
            if (objet.nature == "character") {
                objet.y = this.y - objet.height;
                objet.can_jump = true;
                objet.move_y = -6;
                this.System.map.ennemy++;
                this.remove();
            }
        }
        else {
            if (objet.nature == "character") {
                objet.damage(this.System);
            }
        }
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#A0522D";
        ctx.fillRect(this.x, this.y, 35, 22);
        ctx.fillStyle = "#FFE4B5";
        ctx.fillRect(this.x + 5, this.y + 22, 25, 7);
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y + 29, 12, 6);
        ctx.fillRect(this.x + 23, this.y + 29, 12, 6);
    };
}