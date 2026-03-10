import type { System } from '../../system/class';
import { Map } from '../class';

export class Level_1 extends Map {
    name = "Test";
    background_color = "#AFEEEE";
    width = 2000;
    height = 1500;

    constructor(system: System) {
        super(system);

        this.addItem("Ground", [0, 1300, 2000, 200]);
        this.addCoinBrick(200, 1150);
        this.addItem("Mushroom", [205, 1120]);
        this.addItem("Bumper", [400, 1280, 300]);
        this.addFlower(0, 1300 - 25, 400);
        this.addItem("Pipe", [500, 1200, 300]);
        this.addItem("Plateform", [610, 1200, 90]);
        this.addItem("Brick", [650, 1050]);
        this.addItem("Thunder", [655, 1020]);
        this.addSpikeLine(600, 1275, 4);
        this.addItem("Goumba", [800, 1265]);
        this.addFlag(1000, 850);
    };

    init = () => {
        this.system.character.x = 100;
        this.system.character.y = 1150;
        this.system.camera.init(1000, this.system.ctx);
    };
}