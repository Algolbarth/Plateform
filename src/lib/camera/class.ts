import type { System } from "../system/class";

export class Camera {
    x: number = 0;
    y: number = 0;

    init = (y: number, ctx: any) => {
        this.y = y;
        ctx.translate(0, -y);
    };

    reset = (ctx: any) => {
        ctx.translate(this.x, this.y);
        this.x = 0;
        this.y = 0;
    };

    fix = (system: System) => {
        if (system.page.name == "game") {
            let move_x = 0;
            if (system.character.left) {
                move_x -= system.character.speed;
            }
            if (system.character.right) {
                move_x += system.character.speed;
            }

            if ((move_x > 0 && system.character.x + system.character.width / 2 + 1920 / 2 > this.x + 1920) || (move_x < 0 && system.character.x - system.character.width / 2 - 1920 / 2 < this.x)) {
                this.x += move_x;
                system.ctx.translate(-move_x, 0);
            }
            if (this.x < 0) {
                system.ctx.translate(this.x, 0);
                this.x = 0;
            }
            else if (this.x + 1920 > system.map.width) {
                system.ctx.translate(this.x + 1920 - system.map.width, 0);
                this.x = system.map.width - 1920;
            }

            if ((system.character.move_y > 0 && system.character.y + system.character.height / 2 + 1080 / 2 > this.y + 1080) || (system.character.move_y < 0 && system.character.y - system.character.height / 2 - 1080 / 2 < this.y)) {
                this.y += system.character.move_y;
                system.ctx.translate(0, -system.character.move_y);
            }
            if (this.y < 0) {
                system.ctx.translate(0, this.y);
                this.y = 0;
            }
            else if (this.y + 1080 > system.map.height) {
                system.ctx.translate(0, this.y + 1080 - system.map.height);
                this.y = system.map.height - 1080;
            }
        }
    };
};