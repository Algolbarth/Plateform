export function goMenu (System) {
    System.page = {
        name : "menu",
        up : false,
        down : false,
        select : 0,
        timer : 0,
    };
};

export function menu (System) {
    if (System.page.timer == 0) {
        if (System.page.up && System.page.select > 0) {
            System.page.select--;
            System.page.timer = 6;
        }
        if (System.page.down && System.page.select < System.maps.instance.length - 1) {
            System.page.select++;
            System.page.timer = 6;
        }
    }
    else {
        System.page.timer--;
    }
    
    System.empty("#add8e6");

    let i = 0;
    for (const map of System.maps.instance) {
        if (System.page.select == i) {
            drawSelect(System, map, 50, 50 + i*100);
        }
        else {
            drawButton(System, map, 50, 50 + i*100);
        }
        i++;
    }
};

function drawButton (System, map, x, y) {
    System.ctx.fillStyle = "#87cefa";
    System.ctx.fillRect(x, y, 800, 80);
    System.ctx.fillStyle = "#000000";
    System.ctx.font = "25px sans-serif";
    System.ctx.fillText(map.name, x + 10, y + 50);
};

function drawSelect (System, map, x, y) {
    System.ctx.lineWidth = 5;
    System.ctx.fillStyle = "#87cefa";
    System.ctx.fillRect(x, y, 800, 80);
    System.ctx.strokeStyle = "#000000";
    System.ctx.strokeRect(x+2, y+2, 800-2, 80-2);
    System.ctx.fillStyle = "#000000";
    System.ctx.font = "25px sans-serif";
    System.ctx.fillText(map.name, x + 10, y + 50);
    System.ctx.lineWidth = 1;
};

export function keyUpMenu (System, e) {
    if (e.keyCode == 38) {
        System.page.up = false;
    }
    if (e.keyCode == 40) {
        System.page.down = false;
    }
};

export function keyDownMenu (System, e) {
    if (e.keyCode == 38) {
        System.page.up = true;
    }
    if (e.keyCode == 40) {
        System.page.down = true;
    }
    if (e.keyCode == 32) {
        System.newGame(System.maps.instance[System.page.select].name);
    }
};