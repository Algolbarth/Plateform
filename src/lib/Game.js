export function goGame (System) {
    System.page = {
        name : "game",
        frame : 0,
    };
    System.camera.width = System.canvas.width;
	System.camera.height = System.canvas.height;
};

export function game (System) {
    System.page.frame++;
    System.character.move(System);
    for (const entity of System.map.entities) {
        entity.move();
    }

    background(System);

    for (const objet of System.map.objets) {
        objet.draw(System.ctx);
    }
    for (const entity of System.map.entities) {
        entity.draw(System.ctx);
    }
    if (System.character.immune > 0) {
        if (Math.floor(System.page.frame) % 4) {
            System.character.draw(System.ctx);
        }
        System.character.immune--;
    }
    else {
        System.character.draw(System.ctx);
    }
    drawScore(System);

    System.camera.fix(System);
};

function background (System) {
    System.ctx.clearRect(0, 0, System.map.width, System.map.height);
    System.ctx.fillStyle = System.map.background_color;
    System.ctx.fillRect(System.camera.x, System.camera.y, System.camera.width, System.camera.height);
}

function drawScore (System) {
    System.ctx.fillStyle = "#FFD700";
    System.ctx.fillRect(System.camera.x + 5, System.camera.y + 5, 25, 25);
    System.ctx.fillStyle = "#DAA520";
    System.ctx.fillRect(System.camera.x + 15, System.camera.y + 10, 5, 15);

    System.ctx.fillStyle = "#000000";
    System.ctx.font = "25px sans-serif";
    System.ctx.fillText(" x " + System.map.coins, System.camera.x + 30, System.camera.y + 25);
};

export function keyUpGame (System, e) {
    if (e.keyCode == 37) {
        System.character.left = false;
    }
    if (e.keyCode == 39) {
        System.character.right = false;
    }
    if (e.keyCode == 38) {
        System.character.jumping = false;
    }
    if (e.keyCode == 40) {
        System.character.fall = false;
    }
};

export function keyDownGame (System, e) {
    if (e.keyCode == 37) {
        System.character.left = true;
    }
    if (e.keyCode == 39) {
        System.character.right = true;
    }
    if (e.keyCode == 38) {
        System.character.jumping = true;
    }
    if (e.keyCode == 40) {
        System.character.fall = true;
    }
};