import { Interface } from "./class";
import type { System } from "../system/class";

export function goGame(system: System) {
    system.page = new Interface("game", "");
};

export function game(system: System) {
    system.page.frame++;

    system.character.move(system);
    for (const item of system.map.items) {
        if (item.x + item.width >= system.camera.x && item.x < system.camera.x + 1920 && item.move != undefined) {
            item.move();
        }
    }

    background(system);

    for (const item of system.map.items) {
        if (item.x + item.width >= system.camera.x && item.x < system.camera.x + 1920 && item.draw != undefined) {
            item.draw(system.ctx);
        }
    }

    if (system.character.immune > 0) {
        if (Math.floor(system.page.frame) % 4) {
            system.character.draw(system.ctx);
        }
        system.character.immune--;
    }
    else {
        system.character.draw(system.ctx);
    }
    drawScore(system);

    system.camera.fix(system);
};

function background(system: System) {
    system.ctx.clearRect(0, 0, system.map.width, system.map.height);
    system.ctx.fillStyle = system.map.background_color;
    system.ctx.fillRect(system.camera.x, system.camera.y, 1920, 1080);
}

function drawScore(system: System) {
    system.ctx.fillStyle = "#FFD700";
    system.ctx.fillRect(system.camera.x + 5, system.camera.y + 5, 25, 25);
    system.ctx.fillStyle = "#DAA520";
    system.ctx.fillRect(system.camera.x + 15, system.camera.y + 10, 5, 15);

    system.ctx.fillStyle = "#000000";
    system.ctx.font = "25px sans-serif";
    system.ctx.fillText(" x " + system.map.coins, system.camera.x + 30, system.camera.y + 25);
};

export function keyUpGame(system: System, e: any) {
    if (e.keyCode == 37) {
        system.character.left = false;
    }
    if (e.keyCode == 39) {
        system.character.right = false;
    }
    if (e.keyCode == 38) {
        system.character.jumping = false;
    }
    if (e.keyCode == 40) {
        system.character.fall = false;
    }
};

export function keyDownGame(system: System, e: any) {
    if (e.keyCode == 37) {
        system.character.left = true;
    }
    if (e.keyCode == 39) {
        system.character.right = true;
    }
    if (e.keyCode == 38) {
        system.character.jumping = true;
    }
    if (e.keyCode == 40) {
        system.character.fall = true;
    }
};