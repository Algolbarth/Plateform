import { Item } from './class';

export class Entity extends Item {
    nature = "entity";
    ennemy = false;
    move_x = 0;
    move_y = 0;

    move = () => {
        let listItem = [];
        for (let n = 0; n < this.system.map.items.length; n++) {
            if (n != this.index) {
                listItem.push(this.system.map.items[n]);
            }
        }

        this.x += this.move_x;
        for (let n = 0; n < listItem.length; n++) {
            if (this.system.checkCollision(this, listItem[n])) {
                listItem[n].collision_x(this, this.move_x);
            }
        }
        if (this.x + this.width < 0) {
            this.remove();
        }
        else if (this.x > this.system.map.width) {
            this.remove();
        }

        this.move_y += this.system.gravity;
        this.y += this.move_y;
        for (let n = 0; n < listItem.length; n++) {
            if (this.system.checkCollision(this, listItem[n])) {
                listItem[n].collision_y(this);
            }
        }
        if (this.y > this.system.map.height) {
            this.remove();
        }

        for (let n = 0; n < listItem.length; n++) {
            if (this.system.checkCollision(this, listItem[n])) {
                listItem[n].collision(this);
            }
        }
    };
};