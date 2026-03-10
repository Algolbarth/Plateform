import { Item, Solid } from "../class";
import { goWin } from "../../interfaces/win";
import type { System } from "../../system/class";

export class BaseFlag extends Solid {
    name = "BaseFlag";
    width = 50;
    height = 50;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(this.x, this.y + 10, 50, 40);
        for (let n = 0; n < 3; n++) {
            ctx.fillRect(this.x + n * 20, this.y, 10, 10);
        }
    };
};

export class PoleFlag extends Item {
    name = "PoleFlag";
    width = 12;
    height = 450;
    frame: number = 0;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    collision = (item: Item) => {
        if (item.nature == "character") {
            goWin(this.system);
        }
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x + 3, this.y, 6, 450);
        ctx.fillRect(this.x, this.y, 12, 12);

        this.frame++;
        if (this.frame > 5 * 5) {
            this.frame = 0;
        }
        ctx.fillStyle = "#228B22";
        for (let i = 0; i < 5; i++) {
            ctx.fillRect(this.x - 75 + i * 15, this.y + 12 + 5 * (Math.floor(this.frame / 5) == i), 15, 50);
        }
        ctx.fillRect(this.x, this.y + 12, 3, 50);
    };
};