class Train {
    constructor() {
        this.r = 75;
        this.l = 50;
        this.h = 35;
        this.x = width;
        this.y = height - this.l - this.h; 
        this.vx = random(-6,-9);
    }

    move() {
        this.x += this.vx;
    }

    show() {
        image(sImg, this.x, this.y, this.r, this.l);
    }
}