import type { System } from "../../system/class";
import { Item, Solid } from "../class";

export class Brick extends Solid {
    name = "Brick";
    width = 40;
    height = 40;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    collision_y = (item: Item) => {
        if (item.move_y > 0) {
            item.y = this.y - item.height;
            item.can_jump = true;
            item.move_y = 0;
        }
        else if (item.move_y < 0) {
            item.y = this.y + this.height;
            item.move_y = 0;
            if (item.height == 50) {
                this.remove();
            }
        }
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#FF8C00";
        ctx.fillRect(this.x, this.y, 40, 40);
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y + 10, 40, 5);
        ctx.fillRect(this.x, this.y + 25, 40, 5);
        ctx.fillRect(this.x + 10, this.y, 5, 10);
        ctx.fillRect(this.x + 25, this.y + 15, 5, 10);
        ctx.fillRect(this.x + 10, this.y + 30, 5, 10);
    };
};