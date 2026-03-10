import type { System } from '../../system/class';
import { Map } from '../class';

export class Level_3 extends Map {
    name = "Jump";
    background_color = "#44362c";
    width = 2600;
    height = 1500;

    constructor(system: System) {
        super(system);

        this.addItem("Ground", [0, 1300, 500, 200]);
        this.addItem("Bumper", [400, 1280]);
        this.addItem("Bumper", [600, 1280]);
        this.addItem("Ground", [600, 1300, 100, 200]);
        this.addItem("Bumper", [800, 1280]);
        this.addItem("Ground", [800, 1300, 100, 200]);
        this.addItem("Bumper", [1000, 1280]);
        this.addItem("Ground", [1000, 1300, 100, 200]);
        this.addItem("Plateform", [1200, 1280, 100]);
        this.addItem("Bumper", [1450, 1280]);
        this.addItem("Ground", [1450, 1300, 100, 200]);

        this.addItem("Bumper", [1700, 1280]);
        this.addItem("Ground", [1700, 1300, 100, 200]);
        this.addItem("Plateform", [1700, 950, 100]);
        this.addItem("Bumper", [1500, 850]);
        this.addItem("Bumper", [1300, 750]);
        this.addItem("Bumper", [1100, 650]);
        this.addItem("Plateform", [600, 550, 400]);
        this.addItem("Bumper", [500, 575]);
        this.addItem("Ground", [500, 595, 100, 205]);

        this.addItem("Ground", [0, 750, 450, 50]);
        this.addItem("Ground", [0, 700, 250, 75]);
        this.addSpikeLine(450, 475, 2);
        this.addSpikeLine(250, 725, 8);
        this.addItem("Bumper", [100, 680]);
        this.addItem("Ground", [450, 500, 50, 300]);

        this.addItem("Ground", [250, 285, 150, 90]);
        this.addItem("Ground", [400, 200, 100, 175]);
        this.addItem("Plateform", [0, 350, 250]);
        this.addItem("Thunder", [430, 100]);

        this.addItem("Ground", [500, 290, 1000, 85]);
        for (let i = 0; i < 10; i++) {
            this.addItem("Bumper", [500 + i * 100, 200]);
        }
        this.addSpikeLine(500, 0, 40, "down");
        this.addSpikeLine(500, 265, 40);
        this.addItem("Ground", [1500, 200, 200, 175]);

        this.addItem("Plateform", [1700, 200, 80]);
        this.addItem("Plateform", [1980, 200, 20]);
        this.addItem("Plateform", [1750, 300, 220]);
        this.addSpikeLine(1700, 325, 12);
        this.addItem("Plateform", [1700, 350, 300]);
        this.addItem("Ground", [1800, 0, 150, 230]);

        this.addItem("Ground", [2000, 200, 100, 1300]);
        this.addItem("Plateform", [2100, 200, 100]);
        this.addItem("Ground", [2200, 0, 100, 1110]);
        this.addItem("Ground", [2100, 1300, 500, 200]);
        this.addItem("Plateform", [2100, 1100, 100]);
        this.addFlag(2500, 850);
    };

    init = () => {
        this.system.character.x = 100;
        this.system.character.y = 1150;
        this.system.camera.init(1000, this.system.ctx);
    };
}