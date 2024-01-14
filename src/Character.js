import { goLoose } from './Loose.js';

export class Character {
    nature = "character";
    x = 0;
    y = 0;
    height = 35;
    width = 25;
    speed = 3;
    jumping = false;
    fall = false;
    left = false;
    right = false;
    can_jump = false;
    move_y = 10;
    immune = 0;
    type = "little";

    move = function (System) {
        let listObject = [];
        for (let n = 0; n < System.map.objects.length; n++) {
            listObject.push(System.map.objects[n]);
        }
        let listEntity = [];
        for (let n = 0; n < System.map.entities.length; n++) {
            listEntity.push(System.map.entities[n]);
        }
    
        let move_x = 0;
        if (System.character.left) {
            move_x -= System.character.speed;
        }
        if (System.character.right) {
            move_x += System.character.speed;
        }
        System.character.x += move_x;
        for (let n = 0; n < listObject.length; n++) {
            if (System.checkCollision(System.character, listObject[n])) {
                listObject[n].collision_x(System.character, move_x);
            }
        }
        for (let n = 0; n < listEntity.length; n++) {
            if (System.checkCollision(System.character, listEntity[n])) {
                listEntity[n].collision_x(System.character, move_x);
            }
        }
        if (System.character.x < 0) {
            System.character.x = 0;
        }
        else if (System.character.x + System.character.width > System.map.width) {
            System.character.x = System.map.width - System.character.width;
        }
    
        if (System.character.jumping && System.character.can_jump) {
            System.character.can_jump = false;
            System.character.move_y = -12;
        }
        System.character.move_y += System.gravity;
        System.character.y += System.character.move_y;
        for (let n = 0; n < listObject.length; n++) {
            if (System.checkCollision(System.character, listObject[n])) {
                listObject[n].collision_y(System.character);
            }
        }
        for (let n = 0; n < listEntity.length; n++) {
            if (System.checkCollision(System.character, listEntity[n])) {
                listEntity[n].collision_y(System.character);
            }
        }
        if (System.character.y > System.map.height) {
            this.death(System);
        }
    
        for (let n = 0; n < listObject.length; n++) {
            if (System.checkCollision(System.character, listObject[n])) {
                listObject[n].collision(System.character);
            }
        }
        for (let n = 0; n < listEntity.length; n++) {
            if (System.checkCollision(System.character, listEntity[n])) {
                listEntity[n].collision(System.character);
            }
        }
    };

    damage = function (System) {
        if (this.immune == 0) {
            if (this.type != "little") {
                this.height = 35;
                this.y += 15;
                this.speed = 3;
                this.type = "little";
                this.immune = 150;
            }
            else {
                this.death(System);
            }
        }
    };

    death = function (System) {
        goLoose(System);
    };

    draw = function (ctx) {
        switch (this.type) {
            case "little":
                ctx.fillStyle = "#EE0000";
                ctx.fillRect(this.x + 3, this.y, 20, 5);
                ctx.fillRect(this.x, this.y + 15, 25, 15);
                ctx.fillStyle = "#FFE4B5";
                ctx.fillRect(this.x + 3, this.y + 5, 20, 10);
                ctx.fillStyle = "#1E90FF";
                ctx.fillRect(this.x + 5, this.y + 15, 15, 8);
                ctx.fillStyle = "#A0522D";
                ctx.fillRect(this.x, this.y + 30, 10, 5);
                ctx.fillRect(this.x + 15, this.y + 30, 10, 5);
                break;
            case "tall":
                ctx.fillStyle = "#EE0000";
                ctx.fillRect(this.x + 3, this.y, 20, 5);
                ctx.fillRect(this.x, this.y + 15, 25, 30);
                ctx.fillStyle = "#FFE4B5";
                ctx.fillRect(this.x + 3, this.y + 5, 20, 10);
                ctx.fillStyle = "#1E90FF";
                ctx.fillRect(this.x + 5, this.y + 15, 15, 8);
                ctx.fillStyle = "#A0522D";
                ctx.fillRect(this.x, this.y + 45, 10, 5);
                ctx.fillRect(this.x + 15, this.y + 45, 10, 5);
                break;
            case "speed":
                ctx.fillStyle = "#DDDD00";
                ctx.fillRect(this.x + 3, this.y, 20, 5);
                ctx.fillRect(this.x, this.y + 15, 25, 30);
                ctx.fillStyle = "#FFE4B5";
                ctx.fillRect(this.x + 3, this.y + 5, 20, 10);
                ctx.fillStyle = "#1E90FF";
                ctx.fillRect(this.x + 5, this.y + 15, 15, 8);
                ctx.fillStyle = "#A0522D";
                ctx.fillRect(this.x, this.y + 45, 10, 5);
                ctx.fillRect(this.x + 15, this.y + 45, 10, 5);
                break;
        }
    };
}