import type { System } from "../../system/class";
import { Character } from "../character";
import type { Item } from "../class";
import { Entity } from "../entity";

export class Goumba extends Entity {
    name = "Goumba";
    ennemy = true;
    width = 35;
    height = 35;
    move_x = -1;
    frame = 0;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    collision_x = (item: Item) => {
        if (item instanceof Character) {
            item.damage(this.system);
        }
    };

    collision_y = (item: Item) => {
        if (item.move_y > 0) {
            if (item instanceof Character) {
                item.y = this.y - item.height;
                item.can_jump = true;
                item.move_y = -6;
                this.system.map.ennemy++;
                this.remove();
            }
        }
        else {
            if (item instanceof Character) {
                item.damage(this.system);
            }
        }
    };

    draw = (ctx: any) => {
        this.frame++;
        if (this.frame > 40) {
            this.frame = 0;
        }

        ctx.fillStyle = "#A0522D";
        ctx.fillRect(this.x, this.y, 35, 22);
        ctx.fillStyle = "#FFE4B5";
        ctx.fillRect(this.x + 5, this.y + 22, 25, 7);

        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x + 5, this.y + 5, 8, 8);
        ctx.fillRect(this.x + 35 - 5 - 8, this.y + 5, 8, 8);
        ctx.fillStyle = "#FFFFFF";
        if (this.move_x <= 0) {
            ctx.fillRect(this.x + 5, this.y + 5, 3, 3);
            ctx.fillRect(this.x + 35 - 5 - 8, this.y + 5, 3, 3);
        }
        else {
            ctx.fillRect(this.x + 10, this.y + 5, 3, 3);
            ctx.fillRect(this.x + 35 - 13 + 5, this.y + 5, 3, 3);
        }

        ctx.fillStyle = "#000000";
        if (this.frame < 20) {
            ctx.fillRect(this.x, this.y + 29, 12, 6);
            ctx.fillRect(this.x + 23, this.y + 25, 12, 10);
        }
        else {
            ctx.fillRect(this.x, this.y + 25, 12, 10);
            ctx.fillRect(this.x + 23, this.y + 29, 12, 6);
        }
    };
};