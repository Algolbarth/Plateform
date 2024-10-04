export class Objet {
    nature = "objet";
    place;
    name;
    x;
    y;
    width;
    height;

    constructor (System) {
        this.System = System;
    }
    
    remove = function () {
        this.System.map.objets.splice(this.place, 1);
        for (let n = this.place; n < this.System.map.objets.length; n++) {
            this.System.map.objets[n].place--;
        }
    }

    collision = function () { };

    collision_x = function (move_x) { };
    
    collision_y = function () { };
}

export class Solid extends Objet {
    collision_x = function (o, move_x) {
        if (move_x > 0) {
            o.x = this.x - o.width;
            if (o.nature == "entity") {
                o.move_x = -move_x;
            }
        }
        else if (move_x < 0) {
            o.x = this.x + this.width;
            if (o.nature == "entity") {
                o.move_x = -move_x;
            }
        }
    };

    collision_y = function (o) {
        if (o.move_y > 0) {
            o.y = this.y - o.height;
            o.can_jump = true;
            o.move_y = 0;
        }
        else if (o.move_y < 0) {
            o.y = this.y + this.height;
            o.move_y = 0;
        }
    };
}