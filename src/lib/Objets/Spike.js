import {Solid} from "../Objet.js";

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

    collision_x = function (objet, move_x) {
        if (move_x > 0) {
            objet.x = this.x - objet.width;
            if (objet.nature == "entity") {
                objet.move_x = -move_x;
            }
        }
        else if (move_x < 0) {
            objet.x = this.x + this.width;
            if (objet.nature == "entity") {
                objet.move_x = -move_x;
            }
        }
        if (objet.nature == "character") {
            objet.damage(this.System);
        }
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
        }
        if (objet.nature == "character") {
            objet.damage(this.System);
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