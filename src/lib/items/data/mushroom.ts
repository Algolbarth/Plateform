import type { System } from "../../system/class";
import { Character } from "../character";
import type { Item } from "../class";
import { Entity } from "../entity";

export class Mushroom extends Entity {
    name = "Mushroom";
    width = 30;
    height = 30;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    collision = (item: Item) => {
        if (item instanceof Character && item.type == "little") {
            this.remove();
            item.type = "tall";
            item.height = 50;
            item.y -= 15;
        }
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, 30, 20);
        ctx.fillStyle = "#EEE8AA";
        ctx.fillRect(this.x + 5, this.y + 20, 20, 10);
    };
};