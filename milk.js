class Milk {
    constructor() {
        this.r = 100;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 0.75;
    }

    jump() {
    
        if (this.y == height - this.r){
            this.vy = -15;
        }
    } 

    hits(train) {
        let accuracy = 0.85;
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2= train.x + train.r * 0.5;
        let y2 = train.y + train.r * 0.5;
        let r1 = this.r * accuracy;
        let r2 = train.r * accuracy;
        return collideCircleCircle(x1, y1, r1, x2, y2, r2);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
        image(mImg, this.x, this.y, this.r, this.r);
    }
}