export class Entity {
    nature = "entity";
    ennemy = false;
    place;
    name;
    x;
    y;
    width;
    height;
    move_x = 0;
    move_y = 0;

    constructor (System) {
        this.System = System;
    };

    remove = function () {
        this.System.map.entities.splice(this.place, 1);
        for (let n = this.place; n < this.System.map.entities.length; n++) {
            this.System.map.entities[n].place--;
        }
    };

    collision = function () { };

    collision_x = function (move_x) { };
    
    collision_y = function () { };

    move = function () {
        let listObject = [];
        for (let n = 0; n < this.System.map.objects.length; n++) {
            listObject.push(this.System.map.objects[n]);
        }
        let listEntity = [];
        for (let n = 0; n < this.System.map.entities.length; n++) {
            if (n != this.place) {
                listEntity.push(this.System.map.entities[n]);
            }
        }
    
        this.x += this.move_x;
        for (let n = 0; n < listObject.length; n++) {
            if (this.System.checkCollision(this, listObject[n])) {
                listObject[n].collision_x(this, this.move_x);
            }
        }
        for (let n = 0; n < listEntity.length; n++) {
            if (this.System.checkCollision(this, listEntity[n])) {
                listEntity[n].collision_x(this, this.move_x);
            }
        }
        if (this.x + this.width < 0) {
            this.remove();
        }
        else if (this.x > this.System.map.width) {
            this.remove();
        }
    
        this.move_y += this.System.gravity;
        this.y += this.move_y;
        for (let n = 0; n < listObject.length; n++) {
            if (this.System.checkCollision(this, listObject[n])) {
                listObject[n].collision_y(this);
            }
        }
        for (let n = 0; n < listEntity.length; n++) {
            if (this.System.checkCollision(this, listEntity[n])) {
                listEntity[n].collision_y(this);
            }
        }
        if (this.y > this.System.map.height) {
            this.remove();
        }
    
        for (let n = 0; n < listObject.length; n++) {
            if (this.System.checkCollision(this, listObject[n])) {
                listObject[n].collision(this);
            }
        }
        for (let n = 0; n < listEntity.length; n++) {
            if (this.System.checkCollision(this, listEntity[n])) {
                listEntity[n].collision(this);
            }
        }
    };
}