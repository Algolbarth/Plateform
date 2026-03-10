import type { System } from "../../system/class";
import { Item } from "../class";

export class Plateform extends Item {
    name = "Plateform";
    height = 10;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
        this.width = args[2];
    };

    collision_y = (item: Item) => {
        if (item.move_y > 0) {
            if (!item.fall) {
                item.y = this.y - item.height;
                item.can_jump = true;
                item.move_y = 0;
            }
        }
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#DAA520";
        ctx.fillRect(this.x, this.y, this.width, 10);
        ctx.fillStyle = "#000000";
        for (let n = 1; n < this.width / 20; n++) {
            ctx.fillRect(this.x + 20 * n, this.y, 2, 10);
        }
    };
};