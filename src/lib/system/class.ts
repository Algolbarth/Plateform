import type { Item } from "../items/class";
import { Camera } from "../camera/class";
import { Character } from "../items/character";
import { goGame } from "../interfaces/game";
import { Interface } from "../interfaces/class";
import { Map } from "../maps/class";
import * as mapList from "../maps/data";
import * as itemsList from "../items/data";

export class System {
    items = new Items(this);
    maps = new Maps(this);
    animation: any;
    camera: Camera = new Camera();
    character: Character = new Character(this);
    map: Map = new Map(this);
    gravity: number = 0.4;
    ctx: any;
    canvas: any;
    page: Interface = new Interface("menu", "0");

    constructor() {
        for (const item of Object.keys(itemsList)) {
            const itemClass = itemsList[item];
            const itemInstance = new itemClass(this, []);
            this.items.class.push(itemClass);
            this.items.instance.push(itemInstance);
        }

        for (const map of Object.keys(mapList)) {
            const mapClass = mapList[map];
            const mapInstance = new mapClass(this);
            this.maps.class.push(mapClass);
            this.maps.instance.push(mapInstance);
        }
    };

    checkCollision = (item_1: Item, item_2: Item) => {
        if (
            item_1.x + item_1.width > item_2.x &&
            item_1.x < item_2.x + item_2.width &&
            item_1.y + item_1.height > item_2.y &&
            item_1.y < item_2.y + item_2.height
        ) {
            return true;
        }
    };

    newGame = (name: string) => {
        this.character = new Character(this);
        this.camera = new Camera();
        this.maps.define(name);
        this.map.init();
        goGame(this);
    };

    retry = () => {
        this.newGame(this.map.name);
    };

    empty = (color: string) => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
};

class Items {
    class = [];
    instance = [];
    system: System;

    constructor(system: System) {
        this.system = system;
    };

    get = (name: string) => {
        for (let i = 0; i < this.instance.length; i++) {
            if (this.instance[i].name == name) {
                return this.class[i];
            }
        }
    };
};

class Maps {
    class = [];
    instance = [];
    system: System;

    constructor(system: System) {
        this.system = system;
    };

    get = (name: string) => {
        for (let i = 0; i < this.instance.length; i++) {
            if (this.instance[i].name == name) {
                return new this.class[i](this.system);
            }
        }
    };

    define = (name: string) => {
        this.system.map = this.get(name);
    };
};