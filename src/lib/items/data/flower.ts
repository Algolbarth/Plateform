import type { System } from "../../system/class";
import { Item } from "../class";

export class Flower extends Item {
    name = "Flower";
    type: string;
    width = 15;
    height = 25;

    constructor(system: System, args: any) {
        super(system);

        this.x = args[0];
        this.y = args[1];
        if (args.length > 2 && args[2] != undefined) {
            this.type = args[2];
        }
        else {
            let types = ["Base", "Jaune", "Rose", "Rouge", "Cyan"];
            this.type = types[Math.floor(Math.random() * types.length)];
        }
    };

    draw = (ctx: any) => {
        ctx.fillStyle = "#32CD32";
        ctx.fillRect(this.x + 5, this.y + 15, 5, 10);
        if (this.type == "Base") {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(this.x, this.y, 15, 15);
            ctx.fillStyle = "#FFFF00";
            ctx.fillRect(this.x + 3, this.y + 3, 9, 9);
        }
        else if (this.type == "Jaune") {
            ctx.fillStyle = "#FFFF00";
            ctx.fillRect(this.x, this.y, 15, 15);
        }
        else if (this.type == "Rouge") {
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(this.x, this.y, 15, 15);
        }
        else if (this.type == "Rose") {
            ctx.fillStyle = "#FF00FF";
            ctx.fillRect(this.x, this.y, 15, 15);
        }
        else if (this.type == "Cyan") {
            ctx.fillStyle = "#00FFFF";
            ctx.fillRect(this.x, this.y, 15, 15);
        }
    };
};