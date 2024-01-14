export class Object {
    nature = "object";
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
        this.System.map.objects.splice(this.place, 1);
        for (let n = this.place; n < this.System.map.objects.length; n++) {
            this.System.map.objects[n].place--;
        }
    }

    collision = function () { };

    collision_x = function (move_x) { };
    
    collision_y = function () { };
}

export class Solid extends Object {
    collision_x = function (object, move_x) {
        if (move_x > 0) {
            object.x = this.x - object.width;
            if (object.nature == "entity") {
                object.move_x = -move_x;
            }
        }
        else if (move_x < 0) {
            object.x = this.x + this.width;
            if (object.nature == "entity") {
                object.move_x = -move_x;
            }
        }
    };

    collision_y = function (object) {
        if (object.move_y > 0) {
            object.y = this.y - object.height;
            object.can_jump = true;
            object.move_y = 0;
        }
        else if (object.move_y < 0) {
            object.y = this.y + this.height;
            object.move_y = 0;
        }
    };
}