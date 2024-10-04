export class Camera {
    x = 0;
    y = 0;
    width;
    height;

    init = function (y, ctx) {
        this.y = y;
        ctx.translate(0, -y);
    };

    reset = function (ctx) {
        ctx.translate(this.x, this.y);
        this.x = 0;
        this.y = 0;
    };

    fix = function (System) {
        if (System.page.name == "game") {
            let move_x = 0;
            if (System.character.left) {
                move_x -= System.character.speed;
            }
            if (System.character.right) {
                move_x += System.character.speed;
            }
            
            if ((move_x > 0 && System.character.x + System.character.width / 2 + System.canvas.width / 2 > this.x + this.width) || (move_x < 0 && System.character.x - System.character.width / 2 - System.canvas.width / 2 < this.x)) {
                this.x += move_x;
                System.ctx.translate(-move_x, 0);
            }
            if (this.x < 0) {
                System.ctx.translate(this.x, 0);
                this.x = 0;
            }
            else if (this.x + this.width > System.map.width) {
                System.ctx.translate(this.x + this.width - System.map.width, 0);
                this.x = System.map.width - this.width;
            }
        
            if ((System.character.move_y > 0 && System.character.y + System.character.height / 2 + System.canvas.height / 2 > this.y + this.height) || (System.character.move_y < 0 && System.character.y - System.character.height / 2 - System.canvas.height / 2 < this.y)) {
                this.y += System.character.move_y;
                System.ctx.translate(0, -System.character.move_y);
            }
            if (this.y < 0) {
                System.ctx.translate(0, this.y);
                this.y = 0;
            }
            else if (this.y + this.height > System.map.height) {
                System.ctx.translate(0, this.y + this.height - System.map.height);
                this.y = System.map.height - this.height;
            }
        }
    };
}