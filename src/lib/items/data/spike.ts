import type { System } from "../../system/class";
import { Character } from "../character";
import { Item, Solid } from "../class";
import { Entity } from "../entity";

export class Spike extends Solid {
    name = "Spike";
    width = 25;
    height = 25;
    style = "up";

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
        this.style = args[2];
    };

    collision_x = (item: Item, move_x: number) => {
        if (move_x > 0) {
            item.x = this.x - item.width;
            if (item instanceof Entity) {
                item.move_x = -move_x;
            }
        }
        else if (move_x < 0) {
            item.x = this.x + this.width;
            if (item instanceof Entity) {
                item.move_x = -move_x;
            }
        }
        if (item instanceof Character) {
            item.damage(this.system);
        }
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
        }
        if (item instanceof Character) {
            item.damage(this.system);
        }
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#808080";
        ctx.beginPath();
        switch (this.style) {
            case "up":
                ctx.moveTo(this.x, this.y + this.height);
                ctx.lineTo(this.x + this.width / 2, this.y);
                ctx.lineTo(this.x + this.width, this.y + this.height);
                break;
            case "down":
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.width, this.y);
                ctx.lineTo(this.x + this.width / 2, this.y + this.height);
                break;
        }
        ctx.fill();
        ctx.closePath();
    };
};