import type { System } from "../../system/class";
import { Character } from "../character";
import { Item } from "../class";

export class Coin extends Item {
    name = "Coin";
    width = 25;
    height = 25;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
    };

    collision = (item: Item) => {
        if (item instanceof Character) {
            this.remove();
            this.system.map.coins++;
        }
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#FFD700";
        ctx.fillRect(this.x, this.y, 25, 25);
        ctx.fillStyle = "#DAA520";
        ctx.fillRect(this.x + 10, this.y + 5, 5, 15);
    };
};