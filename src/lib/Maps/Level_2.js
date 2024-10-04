import { Map } from '../Map.js';

export class Level_2 extends Map {
    name = "New Super Mario Bros";
    background_color = "#AFEEEE";
    width = 9000;
    height = 1500;

    constructor(System) {
        super(System);

        this.addObjet("Ground", [0, 1350, 2000, 250]);
        this.addCoinBrick(250, 1200);
        this.addObjet("Brick", [350, 1200]);
        this.addEntity("Mushroom", [355, 1170]);
        this.addCoinBrick(390, 1200);
        this.addEntity("Goumba", [500, 1310]);

        this.addObjet("Ground", [600, 1300, 150, 105]);
        for (let n = 0; n < 3; n++) {
            this.addObjet("Coin", [550 + 35 * n, 1220 - 20 * n]);
        }
        this.addObjet("Ground", [750, 1225, 150, 155]);
        for (let n = 0; n < 3; n++) {
            this.addObjet("Coin", [700 + 35 * n, 1150 - 20 * n]);
        }
        this.addCoinBrick(850, 1075);

        for (let n = 0; n < 2; n++) {
            this.addObjet("Brick", [1050 + 80 * n, 1200]);
        }
        this.addCoinBrick(1090, 1200);
        this.addCoinBrick(1090, 1075);

        this.addObjet("Ground", [1300, 1300, 200, 105]);
        for (let n = 0; n < 2; n++) {
            this.addObjet("Coin", [1335 + 105 * n, 1150]);
            this.addObjet("Coin", [1370 + 35 * n, 1125]);
        }
        this.addEntity("Goumba", [1450, 1260]);

        this.addObjet("Pipe", [1650, 1225, 400]);
        this.addSpikeLine(1850, 1325, 2);
        for (let n = 0; n < 2; n++) {
            this.addObjet("Coin", [2015 + 105 * n, 1200]);
            this.addObjet("Coin", [2050 + 35 * n, 1175]);
        }

        this.addObjet("Ground", [2150, 1350, 850, 250]);
        this.addSpikeLine(2350, 1325, 2);
        this.addObjet("Brick", [2250, 1200]);
        this.addEntity("Mushroom", [2255, 1170]);
        for (let n = 0; n < 2; n++) {
            this.addObjet("Brick", [2500 + 80 * n, 1200]);
        }
        this.addCoinBrick(2540, 1200);
        for (let n = 0; n < 2; n++) {
            this.addCoinBrick(2750 + 40 * n, 1200);
        }
        for (let n = 0; n < 2; n++) {
            this.addObjet("Coin", [3015 + 105 * n, 1200]);
            this.addObjet("Coin", [3050 + 35 * n, 1175]);
        }

        this.addObjet("Ground", [3150, 1350, 2000, 250]);
        this.addObjet("Pipe", [3300, 1225, 400]);
        for (let n = 0; n < 3; n++) {
            this.addObjet("Coin", [3400 + 35 * n, 1080 - 20 * n]);
        }
        for (let n = 0; n < 5; n++) {
            this.addObjet("Brick", [3500 + 40 * n, 1125]);
        }
        for (let n = 0; n < 2; n++) {
            this.addObjet("Brick", [3900 + 40 * n, 1200]);
        }
        this.addCoinBrick(3980, 1200);
        this.addObjet("Plateform", [4020, 1200, 120]);
        for (let n = 0; n < 3; n++) {
            this.addObjet("Coin", [4027 + 40 * n, 1170]);
        }
        this.addCoinBrick(4140, 1200);
        for (let n = 0; n < 2; n++) {
            this.addObjet("Brick", [4180 + 40 * n, 1200]);
        }
        for (let n = 0; n < 3; n++) {
            this.addObjet("Brick", [4020 + 40 * n, 1075]);
        }
        this.addEntity("Goumba", [3400, 1260]);
        this.addEntity("Goumba", [4360, 1260]);
        this.addObjet("Pipe", [4400, 1225, 400]);
        this.addSpikeLine(4550, 1325, 2);
        for (let n = 0; n < 3; n++) {
            this.addCoinBrick(4700 + 140 * n, 1200);
        }
        for (let n = 0; n < 2; n++) {
            this.addObjet("Coin", [5165 + 105 * n, 1200]);
            this.addObjet("Coin", [5200 + 35 * n, 1175]);
        }

        this.addObjet("Ground", [5300, 1350, 1400, 250]);
        this.addSpikeLine(5400, 1325, 2);
        this.addEntity("Goumba", [5500, 1260]);
        this.addObjet("Brick", [5550, 1200]);
        this.addEntity("Mushroom", [5555, 1170]);
        this.addObjet("Ground", [5800, 1300, 150, 105]);
        this.addObjet("Ground", [5950, 1225, 150, 155]);
        this.addObjet("Plateform", [6100, 1225, 150]);
        this.addObjet("Ground", [6250, 1225, 300, 155]);
        this.addCoinBrick(6400, 1075);
        this.addObjet("Ground", [6550, 1300, 150, 105]);
        for (let n = 0; n < 2; n++) {
            this.addObjet("Coin", [6715 + 105 * n, 1150]);
            this.addObjet("Coin", [6750 + 35 * n, 1125]);
        }

        this.addObjet("Ground", [6850, 1350, 1000, 250]);
        this.addSpikeLine(6950, 1325, 2);
        this.addObjet("Pipe", [7150, 1225, 400]);
        for (let n = 0; n < 4; n++) {
            this.addObjet("Brick", [7350 + 40 * n, 1125]);
        }
        this.addCoinBrick(7470, 1125);
        this.addEntity("Goumba", [7500, 1260]);
        this.addSpikeLine(7650, 1325, 2);
        for (let n = 0; n < 2; n++) {
            this.addObjet("Coin", [7865 + 105 * n, 1200]);
            this.addObjet("Coin", [7900 + 35 * n, 1175]);
        }

        this.addObjet("Ground", [8000, 1350, 2000, 250]);
        this.addSpikeLine(8100, 1325, 2);
        for (let n = 0; n < 2; n++) {
            this.addObjet("Brick", [8200 + 40 * n, 1200]);
        }
        this.addCoinBrick(8280, 1200);
        this.addEntity("Goumba", [8500, 1260]);

        this.addFlag(8800, 900);
    }

    init = function () {
        this.System.character.x = 100;
        this.System.character.y = 1150;
        this.System.camera.init(1000, this.System.ctx);
    }
}