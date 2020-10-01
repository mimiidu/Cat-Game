class Train {
    constructor() {
        this.r = 150;
        this.l = 40;
        this.h = 10;
        this.x = width;
        this.y = height - this.l - this.h; 
        this.vx = random(-6,-9);
    }

    move() {
        this.x += this.vx;
    }

    show() {
        image(sImg, this.x, this.y, this.r, this.l);
        // rect(this.x, this.y, this.r, this.l)
    }
}