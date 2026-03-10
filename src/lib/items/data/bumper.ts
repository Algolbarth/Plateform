import type { System } from "../../system/class";
import { Item, Solid } from "../class";

export class Bumper extends Solid {
    name = "Bumper";
    width = 100;
    height = 20;
    frame: number = 0;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    collision_y = (item: Item) => {
        if (item.move_y > 0) {
            item.y = this.y - item.height;
            if (item.jumping) {
                item.move_y = -17;
            }
            else if (item.fall) {
                item.move_y = -7;
            }
            else {
                item.move_y = -12;
            }
            this.frame = 60;
        }
        else if (item.move_y < 0) {
            item.y = this.y + this.height;
            item.move_y = 0;
        }
    };

    draw = (ctx: any) => {
        if (this.frame > 0) {
            this.frame--;
        }

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y + Math.floor(this.frame / 20), 100, 5 - Math.floor(this.frame / 20));

        ctx.fillStyle = "#7F3300";
        ctx.fillRect(this.x, this.y + 5, 100, 10);
        ctx.fillRect(this.x + 10, this.y + 15, 10, 5);
        ctx.fillRect(this.x + 80, this.y + 15, 10, 5);
    };
};