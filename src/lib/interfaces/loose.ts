import type { System } from '../system/class';
import { Interface } from './class';
import { goMenu } from './menu';

export function goLoose(system: System) {
    system.camera.reset(system.ctx);
    system.page = new Interface("loose", "retry");
};

export function loose(system: System) {
    if (system.page.timer == 0) {
        if (system.page.left && system.page.select == "select") {
            system.page.select = "retry";
            system.page.timer = 10;
        }
        if (system.page.right && system.page.select == "retry") {
            system.page.select = "select";
            system.page.timer = 10;
        }
    }
    else {
        system.page.timer--;
    }

    system.empty("#add8e6");

    if (system.page.select == "retry") {
        drawSelect(system, "Retry", system.canvas.width / 2 - 450, system.canvas.height / 2);
        drawButton(system, "Level Selection", system.canvas.width / 2 + 50, system.canvas.height / 2);
    }
    else {
        drawButton(system, "Retry", system.canvas.width / 2 - 450, system.canvas.height / 2);
        drawSelect(system, "Level Selection", system.canvas.width / 2 + 50, system.canvas.height / 2);
    }
};

function drawButton(system: System, name: string, x: number, y: number) {
    system.ctx.fillStyle = "#87cefa";
    system.ctx.fillRect(x, y, 400, 80);
    system.ctx.fillStyle = "#000000";
    system.ctx.font = "25px sans-serif";
    system.ctx.fillText(name, x + 400 / 2 - 25 * name.length / 4, y + 50);
};

function drawSelect(system: System, name: string, x: number, y: number) {
    system.ctx.lineWidth = 5;
    system.ctx.fillStyle = "#87cefa";
    system.ctx.fillRect(x, y, 400, 80);
    system.ctx.strokeStyle = "#000000";
    system.ctx.strokeRect(x + 2, y + 2, 400 - 2, 80 - 2);
    system.ctx.fillStyle = "#000000";
    system.ctx.font = "25px sans-serif";
    system.ctx.fillText(name, x + 400 / 2 - 25 * name.length / 4, y + 50);
    system.ctx.lineWidth = 1;
};

export function keyUpLoose(system: System, e: any) {
    if (e.keyCode == 37) {
        system.page.left = false;
    }
    if (e.keyCode == 39) {
        system.page.right = false;
    }
};

export function keyDownLoose(system: System, e: any) {
    if (e.keyCode == 37) {
        system.page.left = true;
    }
    if (e.keyCode == 39) {
        system.page.right = true;
    }
    if (e.keyCode == 32) {
        if (system.page.select == "retry") {
            system.retry();
        }
        else {
            goMenu(system);
        }
    }
};