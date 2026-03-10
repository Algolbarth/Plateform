import type { System } from "../system/class";

export class Item {
    nature = "item";
    index: number = 0;
    name: string = "";
    x: number = 0;
    y: number = 0;
    width: number = 25;
    height: number = 25;
    system: System;

    constructor(system: System) {
        this.system = system;
    };

    draw = (ctx: any) => { };

    remove = () => {
        this.system.map.items.splice(this.index, 1);
        for (let n = this.index; n < this.system.map.items.length; n++) {
            this.system.map.items[n].index--;
        }
    };

    collision = function (item: Item) { };

    collision_x = function (item: Item, move_x: number) { };

    collision_y = function (item: Item) { };
};

export class Solid extends Item {
    collision_x = (item: Item, move_x: number) => {
        if (move_x > 0) {
            item.x = this.x - item.width;
            if (item.nature == "entity") {
                item.move_x = -move_x;
            }
        }
        else if (move_x < 0) {
            item.x = this.x + this.width;
            if (item.nature == "entity") {
                item.move_x = -move_x;
            }
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
    };
};