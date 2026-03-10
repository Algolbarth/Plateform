export class Interface {
    name: string;
    select: string;
    timer: number = 0;
    frame: number = 0;
    left: boolean = false;
    right: boolean = false;
    up: boolean = false;
    down: boolean = false;

    constructor(name: string, select: string) {
        this.name = name;
        this.select = select;
    };
};