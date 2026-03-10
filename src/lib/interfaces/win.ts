import type { System } from '../system/class';
import { Interface } from './class';
import { goMenu } from './menu';

export function goWin(system: System) {
    system.camera.reset(system.ctx);
    system.page = new Interface("win", "select");
};

export function win(system: System) {
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

    system.ctx.fillStyle = "#FFD700";
    system.ctx.fillRect(1920 / 2, 1080 / 2 - 100, 25, 25);
    system.ctx.fillStyle = "#DAA520";
    system.ctx.fillRect(1920 / 2 + 10, 1080 / 2 - 100 + 5, 5, 15);

    system.ctx.fillStyle = "#000000";
    system.ctx.font = "25px sans-serif";
    system.ctx.fillText(" x " + system.map.coins + " / " + system.map.max_coins, 1920 / 2 + 25, 1080 / 2 - 100 + 20);

    if (system.page.select == "retry") {
        drawSelect(system, "Retry", 1920 / 2 - 450, 1080 / 2);
        drawButton(system, "Level Selection", 1920 / 2 + 50, 1080 / 2);
    }
    else {
        drawButton(system, "Retry", 1920 / 2 - 450, 1080 / 2);
        drawSelect(system, "Level Selection", 1920 / 2 + 50, 1080 / 2);
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

export function keyUpWin(system: System, e: any) {
    if (e.keyCode == 37) {
        system.page.left = false;
    }
    if (e.keyCode == 39) {
        system.page.right = false;
    }
};

export function keyDownWin(system: System, e: any) {
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