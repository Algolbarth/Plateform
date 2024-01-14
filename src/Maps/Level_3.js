import {Map} from '../Map.js';

export class Level_3 extends Map {
    name = "Jump";
    background_color = "#44362c";
    width = 2600;
    height = 1500;

    constructor (System) {
        super(System);

        this.addObject("Ground", [0, 1300, 500, 200]);
        this.addObject("Bumper", [400, 1280]);
        this.addObject("Bumper", [600, 1280]);
        this.addObject("Ground", [600, 1300, 100, 200]);
        this.addObject("Bumper", [800, 1280]);
        this.addObject("Ground", [800, 1300, 100, 200]);
        this.addObject("Bumper", [1000, 1280]);
        this.addObject("Ground", [1000, 1300, 100, 200]);
        this.addObject("Plateform", [1200, 1280, 100]);
        this.addObject("Bumper", [1450, 1280]);
        this.addObject("Ground", [1450, 1300, 100, 200]);

        this.addObject("Bumper", [1700, 1280]);
        this.addObject("Ground", [1700, 1300, 100, 200]);
        this.addObject("Plateform", [1700, 950, 100]);
        this.addObject("Bumper", [1500, 850]);
        this.addObject("Bumper", [1300, 750]);
        this.addObject("Bumper", [1100, 650]);
        this.addObject("Plateform", [600, 550, 400]);
        this.addObject("Bumper", [500, 575]);
        this.addObject("Ground", [500, 595, 100, 205]);

        this.addObject("Ground", [0, 750, 450, 50]);
        this.addObject("Ground", [0, 700, 250, 75]);
        this.addSpikeLine(450, 475, 2);
        this.addSpikeLine(250, 725, 8);
        this.addObject("Bumper", [100, 680]);
        this.addObject("Ground", [450, 500, 50, 300]);

        this.addObject("Ground", [250, 285, 150, 90]);
        this.addObject("Ground", [400, 200, 100, 175]);
        this.addObject("Plateform", [0, 350, 250]);
        this.addObject("Thunder", [430, 100]);

        this.addObject("Ground", [500, 290, 1000, 85]);
        for (let i=0;i<10;i++) {
            this.addObject("Bumper", [500 + i*100, 200]);
        }
        this.addSpikeLine(500, 0, 40, "down");
        this.addSpikeLine(500, 265, 40);
        this.addObject("Ground", [1500, 200, 200, 175]);

        this.addObject("Plateform", [1700, 200, 80]);
        this.addObject("Plateform", [1980, 200, 20]);
        this.addObject("Plateform", [1750, 300, 220]);
        this.addSpikeLine(1700, 325, 12);
        this.addObject("Plateform", [1700, 350, 300]);
        this.addObject("Ground", [1800, 0, 150, 230]);

        this.addObject("Ground", [2000, 200, 100, 1300]);
        this.addObject("Plateform", [2100, 200, 100]);
        this.addObject("Ground", [2200, 0, 100, 1110]);
        this.addObject("Ground", [2100, 1300, 500, 200]);
        this.addObject("Plateform", [2100, 1100, 100]);
        this.addFlag(2500, 850);
    };

    init = function () {
        this.System.character.x = 100;
        this.System.character.y = 1150;
        this.System.camera.init(1000, this.System.ctx);
    };
}