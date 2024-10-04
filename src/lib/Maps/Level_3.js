import { Map } from '../Map.js';

export class Level_3 extends Map {
    name = "Jump";
    background_color = "#44362c";
    width = 2600;
    height = 1500;

    constructor(System) {
        super(System);

        this.addObjet("Ground", [0, 1300, 500, 200]);
        this.addObjet("Bumper", [400, 1280]);
        this.addObjet("Bumper", [600, 1280]);
        this.addObjet("Ground", [600, 1300, 100, 200]);
        this.addObjet("Bumper", [800, 1280]);
        this.addObjet("Ground", [800, 1300, 100, 200]);
        this.addObjet("Bumper", [1000, 1280]);
        this.addObjet("Ground", [1000, 1300, 100, 200]);
        this.addObjet("Plateform", [1200, 1280, 100]);
        this.addObjet("Bumper", [1450, 1280]);
        this.addObjet("Ground", [1450, 1300, 100, 200]);

        this.addObjet("Bumper", [1700, 1280]);
        this.addObjet("Ground", [1700, 1300, 100, 200]);
        this.addObjet("Plateform", [1700, 950, 100]);
        this.addObjet("Bumper", [1500, 850]);
        this.addObjet("Bumper", [1300, 750]);
        this.addObjet("Bumper", [1100, 650]);
        this.addObjet("Plateform", [600, 550, 400]);
        this.addObjet("Bumper", [500, 575]);
        this.addObjet("Ground", [500, 595, 100, 205]);

        this.addObjet("Ground", [0, 750, 450, 50]);
        this.addObjet("Ground", [0, 700, 250, 75]);
        this.addSpikeLine(450, 475, 2);
        this.addSpikeLine(250, 725, 8);
        this.addObjet("Bumper", [100, 680]);
        this.addObjet("Ground", [450, 500, 50, 300]);

        this.addObjet("Ground", [250, 285, 150, 90]);
        this.addObjet("Ground", [400, 200, 100, 175]);
        this.addObjet("Plateform", [0, 350, 250]);
        this.addObjet("Thunder", [430, 100]);

        this.addObjet("Ground", [500, 290, 1000, 85]);
        for (let i = 0; i < 10; i++) {
            this.addObjet("Bumper", [500 + i * 100, 200]);
        }
        this.addSpikeLine(500, 0, 40, "down");
        this.addSpikeLine(500, 265, 40);
        this.addObjet("Ground", [1500, 200, 200, 175]);

        this.addObjet("Plateform", [1700, 200, 80]);
        this.addObjet("Plateform", [1980, 200, 20]);
        this.addObjet("Plateform", [1750, 300, 220]);
        this.addSpikeLine(1700, 325, 12);
        this.addObjet("Plateform", [1700, 350, 300]);
        this.addObjet("Ground", [1800, 0, 150, 230]);

        this.addObjet("Ground", [2000, 200, 100, 1300]);
        this.addObjet("Plateform", [2100, 200, 100]);
        this.addObjet("Ground", [2200, 0, 100, 1110]);
        this.addObjet("Ground", [2100, 1300, 500, 200]);
        this.addObjet("Plateform", [2100, 1100, 100]);
        this.addFlag(2500, 850);
    };

    init = function () {
        this.System.character.x = 100;
        this.System.character.y = 1150;
        this.System.camera.init(1000, this.System.ctx);
    };
}