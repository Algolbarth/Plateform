import {Objet} from "../Objet.js";

export class Thunder extends Objet {
    name = "Thunder";
    width = 30;
    height = 30;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
    };

    collision = function (objet) {
        if (objet.nature == "character" && objet.type != "speed") {
            this.remove();
            objet.type = "speed";
            objet.speed = 5;
            if (objet.height == 35) {
                objet.height = 50;
                objet.y -= 15;
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