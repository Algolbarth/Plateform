import type { System } from "../../system/class";
import { Solid } from "../class";

export class Ground extends Solid {
    name = "Ground";

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
        this.width = args[2];
        this.height = args[3];
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#D2691E";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#32CD32";
        ctx.fillRect(this.x, this.y, this.width, 10);
        ctx.beginPath();
        for (let n = 0; n < this.width / 25; n++) {
            ctx.moveTo(this.x + n * 25, this.y + 10);
            ctx.lineTo(this.x + n * 25 + 12.5, this.y + 20);
            ctx.lineTo(this.x + n * 25 + 25, this.y + 10);
        }
        ctx.fill();
        ctx.closePath();
    };
};