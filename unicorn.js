class Unicorn {
    constructor() {
        this.r = 225;
        this.l = this.r/2;
        this.h = 30;
        this.x = 50;
        this.y = height-this.l-this.h;
        this.vy = 0;
        this.gravity = 0.7;
    }

    jump() {
    
        if (this.y == height - this.l - this.h){
            this.vy = -17.5;
        }
    } 

    hits(train) {
        // let accuracy = 0.85;
        // let x1 = this.x + this.r * 0.5;
        // let y1 = this.y + this.l * 0.5;
        // let x2= train.x + train.r * 0.5;
        // let y2 = train.y + train.l * 0.5;
        // let r1 = this.r * accuracy;
        // let r2 = train.r * accuracy;
        // return collideCircleCircle(x1, y1, r1, x2, y2, r2);
        let accuracy = 0.85;
        let x1 = this.x + this.r * (1-accuracy);
        let y1 = this.y + this.l * (1-accuracy)/2;
        let x2= train.x + train.r * (1-accuracy)/2;
        let y2 = train.y + train.l * (1-accuracy)/2;
        let r1 = this.r * accuracy - this.r * (1-accuracy);
        let l1 = this.l * accuracy;
        let r2 = train.r * accuracy;
        let l2 = train.l * accuracy;
        return collideRectRect(x1, y1, l1/accuracy, l1, x2, y2, r2, l2);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.l - this.h);
    }

    show() {
        image(cImg, this.x, this.y, this.r, this.l);
    }
}