import type { System } from "$lib/system/class";
import { Character } from "../character";
import { Item } from "../class";

export class Thunder extends Item {
    name = "Thunder";
    width = 30;
    height = 30;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    collision = (item: Item) => {
        if (item instanceof Character && item.type != "speed") {
            this.remove();
            item.type = "speed";
            item.speed = 5;
            if (item.height == 35) {
                item.height = 50;
                item.y -= 15;
            }
        }
    };

    draw = (ctx: any) => {
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
};