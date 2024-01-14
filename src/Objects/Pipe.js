import {Solid} from "../Object.js";

export class Pipe extends Solid {
    name = "Pipe";
    width = 100;

    constructor (System, args) {
        super(System);

        this.x = args[0];
        this.y = args[1];
        this.height = args[2];
    };
    
    draw = function (ctx) {
        ctx.fillStyle = "#D2691E";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#32CD32";
        ctx.fillRect(this.x, this.y, this.width, 10);
        ctx.beginPath();
        for (let n = 0; n < this.width/25; n++) {
            ctx.fillStyle = "#228B22";
            ctx.fillRect(this.x, this.y, 100, this.height);
            ctx.fillRect(this.x - 10, this.y, 120, 20);
            ctx.fillStyle = "#006400";
            ctx.fillRect(this.x, this.y + 20, 100, 10);
        }
        ctx.fill();
        ctx.closePath();
    };
}