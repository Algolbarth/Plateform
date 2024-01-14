import {Map} from '../Map.js';

export class Level_1 extends Map {
    name = "Test";
    background_color = "#AFEEEE";
    width = 2000;
    height = 1500;

    constructor (System) {
        super(System);

        this.addObject("Ground", [0, 1300, 1500, 200]);
        this.addCoinBrick(200, 1150);
        this.addEntity("Mushroom", [205, 1120]);
        this.addObject("Bumper", [400, 1280, 300]);
        this.addObject("Pipe", [500, 1200, 300]);
        this.addObject("Plateform", [610, 1200, 90]);
        this.addObject("Brick", [650, 1050]);
        this.addObject("Thunder", [650, 1020]);
        this.addSpikeLine(600, 1275, 4);
        this.addEntity("Goumba", [800, 1265]);
        this.addFlag(1000, 850);
    };

    init = function () {
        this.System.character.x = 100;
        this.System.character.y = 1150;
        this.System.camera.init(1000, this.System.ctx);
    };
}