import type { Map } from "../maps/class";
import type { System } from "../system/class";
import { Interface } from "./class";

export function goMenu(system: System) {
    system.page = new Interface("menu", "0");
};

export function menu(system: System) {
    if (system.page.timer == 0) {
        if (system.page.up && parseInt(system.page.select) > 0) {
            system.page.select = "" + (parseInt(system.page.select) - 1);
            system.page.timer = 10;
        }
        if (system.page.down && parseInt(system.page.select) < system.maps.instance.length - 1) {
            system.page.select = "" + (parseInt(system.page.select) + 1);
            system.page.timer = 10;
        }
    }
    else {
        system.page.timer--;
    }

    system.empty("#add8e6");

    let i: number = 0;
    for (const map of system.maps.instance) {
        if (parseInt(system.page.select) == i) {
            drawSelect(system, map, 50, 50 + i * 100);
        }
        else {
            drawButton(system, map, 50, 50 + i * 100);
        }
        i++;
    }
};

function drawButton(system: System, map: Map, x: number, y: number) {
    system.ctx.fillStyle = "#87cefa";
    system.ctx.fillRect(x, y, 800, 80);
    system.ctx.fillStyle = "#000000";
    system.ctx.font = "25px sans-serif";
    system.ctx.fillText(map.name, x + 10, y + 50);
};

function drawSelect(system: System, map: Map, x: number, y: number) {
    system.ctx.lineWidth = 5;
    system.ctx.fillStyle = "#87cefa";
    system.ctx.fillRect(x, y, 800, 80);
    system.ctx.strokeStyle = "#000000";
    system.ctx.strokeRect(x + 2, y + 2, 800 - 2, 80 - 2);
    system.ctx.fillStyle = "#000000";
    system.ctx.font = "25px sans-serif";
    system.ctx.fillText(map.name, x + 10, y + 50);
    system.ctx.lineWidth = 1;
};

export function keyUpMenu(system: System, e: any) {
    if (e.keyCode == 38) {
        system.page.up = false;
    }
    if (e.keyCode == 40) {
        system.page.down = false;
    }
};

export function keyDownMenu(system: System, e: any) {
    if (e.keyCode == 38) {
        system.page.up = true;
    }
    if (e.keyCode == 40) {
        system.page.down = true;
    }
    if (e.keyCode == 32) {
        system.newGame(system.maps.instance[parseInt(system.page.select)].name);
    }
};