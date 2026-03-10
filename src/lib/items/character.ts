import { goLoose } from '../interfaces/loose';
import type { System } from '../system/class';
import { Item } from './class';

export class Character extends Item {
    nature = "character";
    x = 0;
    y = 0;
    height = 35;
    width = 25;
    speed: number = 3;
    jumping: boolean = false;
    fall: boolean = false;
    left: boolean = false;
    right: boolean = false;
    can_jump: boolean = false;
    move_y: number = 10;
    immune: number = 0;
    type: string = "little";

    move = (system: System) => {
        let listItem = [];
        for (let n = 0; n < system.map.items.length; n++) {
            listItem.push(system.map.items[n]);
        }

        let move_x = 0;
        if (this.left) {
            move_x -= this.speed;
        }
        if (this.right) {
            move_x += this.speed;
        }
        this.x += move_x;
        for (let n = 0; n < listItem.length; n++) {
            if (system.checkCollision(this, listItem[n])) {
                listItem[n].collision_x(this, move_x);
            }
        }
        if (this.x < 0) {
            this.x = 0;
        }
        else if (this.x + this.width > system.map.width) {
            this.x = system.map.width - this.width;
        }

        if (this.jumping && this.can_jump) {
            this.can_jump = false;
            this.move_y = -12;
        }
        this.move_y += system.gravity;
        this.y += this.move_y;
        for (let n = 0; n < listItem.length; n++) {
            if (system.checkCollision(this, listItem[n])) {
                listItem[n].collision_y(this);
            }
        }
        if (this.y > system.map.height) {
            this.death(system);
        }

        for (let n = 0; n < listItem.length; n++) {
            if (system.checkCollision(this, listItem[n])) {
                listItem[n].collision(this);
            }
        }
    };

    damage = (system: System) => {
        if (this.immune == 0) {
            if (this.type != "little") {
                this.height = 35;
                this.y += 15;
                this.speed = 3;
                this.type = "little";
                this.immune = 150;
            }
            else {
                this.death(system);
            }
        }
    };

    death = (system: System) => {
        goLoose(system);
    };

    draw = (ctx: any) => {
        switch (this.type) {
            case "little":
                ctx.fillStyle = "#EE0000";
                ctx.fillRect(this.x + 3, this.y, 20, 5);
                ctx.fillRect(this.x, this.y + 15, 25, 15);
                ctx.fillStyle = "#FFE4B5";
                ctx.fillRect(this.x + 3, this.y + 5, 20, 10);
                ctx.fillStyle = "#1E90FF";
                ctx.fillRect(this.x + 5, this.y + 15, 15, 8);
                ctx.fillStyle = "#A0522D";
                ctx.fillRect(this.x, this.y + 30, 10, 5);
                ctx.fillRect(this.x + 15, this.y + 30, 10, 5);
                break;
            case "tall":
                ctx.fillStyle = "#EE0000";
                ctx.fillRect(this.x + 3, this.y, 20, 5);
                ctx.fillRect(this.x, this.y + 15, 25, 30);
                ctx.fillStyle = "#FFE4B5";
                ctx.fillRect(this.x + 3, this.y + 5, 20, 10);
                ctx.fillStyle = "#1E90FF";
                ctx.fillRect(this.x + 5, this.y + 15, 15, 8);
                ctx.fillStyle = "#A0522D";
                ctx.fillRect(this.x, this.y + 45, 10, 5);
                ctx.fillRect(this.x + 15, this.y + 45, 10, 5);
                break;
            case "speed":
                ctx.fillStyle = "#FFEA00";
                ctx.fillRect(this.x + 3, this.y, 20, 5);
                ctx.fillRect(this.x, this.y + 15, 25, 30);
                ctx.fillStyle = "#FFE4B5";
                ctx.fillRect(this.x + 3, this.y + 5, 20, 10);
                ctx.fillStyle = "#1E90FF";
                ctx.fillRect(this.x + 5, this.y + 15, 15, 8);
                ctx.fillStyle = "#A0522D";
                ctx.fillRect(this.x, this.y + 45, 10, 5);
                ctx.fillRect(this.x + 15, this.y + 45, 10, 5);
                break;
        }
    };
};