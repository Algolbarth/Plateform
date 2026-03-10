import type { System } from "../../system/class";
import { Solid } from "../class";

export class Pipe extends Solid {
    name = "Pipe";
    width = 100;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
        this.height = args[2];
    };

    draw = (ctx: any) => {
        ctx.beginPath();
        for (let n = 0; n < this.width / 25; n++) {
            ctx.fillStyle = "#228B22";
            ctx.fillRect(this.x, this.y, 100, this.height);
            ctx.fillRect(this.x - 10, this.y, 120, 20);
            ctx.fillStyle = "#006400";
            ctx.fillRect(this.x, this.y + 20, 100, 10);
        }
        ctx.fill();
        ctx.closePath();
    };
};