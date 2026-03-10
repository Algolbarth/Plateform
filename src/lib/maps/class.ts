import type { Item } from "../items/class";
import type { System } from "../system/class";

export class Map {
    name: string = "";
    items: Item[] = [];
    ennemy: number = 0;
    max_ennemy: number = 0;
    coins: number = 0;
    max_coins: number = 0;
    width: number = 0;
    height: number = 0;
    background_color: string = "#000000";
    system: System;

    constructor(system: System) {
        this.system = system;
    };

    addItem = (name: string, args: any) => {
        let item_class = this.system.items.get(name);
        let item = new item_class(this.system, args);

        item.index = this.items.length;

        if (name == "Coin") {
            this.max_coins++;
        }

        if (item.ennemy) {
            this.max_ennemy++;
        }

        this.items.push(item);
    };

    addCoinBrick(x: number, y: number) {
        this.addItem("Coin", [x + 7, y + 7]);
        this.addItem("Brick", [x, y]);
    };

    addFlag(x: number, y: number) {
        this.addItem("PoleFlag", [x + 19, y]);
        this.addItem("BaseFlag", [x, y + 400]);
    };

    addSpikeLine(x: number, y: number, number: number, style: string = "up") {
        for (let i = 0; i < number; i++) {
            this.addItem("Spike", [x + i * 25, y, style]);
        }
    };

    addFlower(x: number, y: number, width: number) {
        for (let i = 0; i < width - 45; i += 60) {
            let x1 = Math.floor(Math.random() * 45);
            let x2;
            while (x2 == undefined || Math.abs(x1 - x2) < 20) {
                x2 = Math.floor(Math.random() * 45);
            }

            this.addItem("Flower", [x + i + x1, y]);
            this.addItem("Flower", [x + i + x2, y]);
        }
    };

    init = () => { };
};