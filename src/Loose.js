import {goMenu} from './Menu.js';

export function goLoose (System) {
    System.camera.reset(System.ctx);
    System.page = {
        name : "loose",
        left : false,
        right : false,
        select : "retry",
        timer : 0,
    };
};

export function loose (System) {
    if (System.page.timer == 0) {
        if (System.page.left && System.page.select == "select") {
            System.page.select = "retry";
            System.page.timer = 6;
        }
        if (System.page.right && System.page.select == "retry") {
            System.page.select = "select";
            System.page.timer = 6;
        }
    }
    else {
        System.page.timer--;
    }
    
    System.empty("#add8e6");

    if (System.page.select == "retry") {
        drawSelect(System, "Retry", System.canvas.width/2 - 450, System.canvas.height/2);
        drawButton(System, "Level Selection", System.canvas.width/2 + 50, System.canvas.height/2);
    }
    else {
        drawButton(System, "Retry", System.canvas.width/2 - 450, System.canvas.height/2);
        drawSelect(System, "Level Selection", System.canvas.width/2 + 50, System.canvas.height/2);
    }
};

function drawButton (System, name, x, y) {
    System.ctx.fillStyle = "#87cefa";
    System.ctx.fillRect(x, y, 400, 80);
    System.ctx.fillStyle = "#000000";
    System.ctx.font = "25px sans-serif";
    System.ctx.fillText(name, x + 400/2 - 25*name.length/4, y + 50);
};

function drawSelect (System, name, x, y) {
    System.ctx.lineWidth = 5;
    System.ctx.fillStyle = "#87cefa";
    System.ctx.fillRect(x, y, 400, 80);
    System.ctx.strokeStyle = "#000000";
    System.ctx.strokeRect(x+2, y+2, 400-2, 80-2);
    System.ctx.fillStyle = "#000000";
    System.ctx.font = "25px sans-serif";
    System.ctx.fillText(name, x + 400/2 - 25*name.length/4, y + 50);
    System.ctx.lineWidth = 1;
};

export function keyUpLoose (System, e) {
    if (e.keyCode == 37) {
        System.page.left = false;
    }
    if (e.keyCode == 39) {
        System.page.right = false;
    }
};

export function keyDownLoose (System, e) {
    if (e.keyCode == 37) {
        System.page.left = true;
    }
    if (e.keyCode == 39) {
        System.page.right = true;
    }
    if (e.keyCode == 32) {
        if (System.page.select == "retry") {
            System.retry();
        }
        else {
            goMenu(System);
        }
    }
};