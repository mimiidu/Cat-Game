let unicorn;
let cImg;
let sImg;
let mImg;
let bImg;
let trains = [];
let counter = 0;
let score = 0;

function preload() {
    cImg = loadImage('catstill.png');
    sImg = loadImage('sushi.png');
    bImg = loadImage('roughbackground.png');
    mImg = loadImage('strawberry.png')
}

function setup() {
    createCanvas(800, 450);
    unicorn = new Unicorn();
    restart = createButton('Play Again');
}

function replay() {
    trains = [];
    loop();
}

function keyPressed() {
    if (key == ' '){
        unicorn.jump();
    }
}

function draw() {

    background(bImg);

    textSize(25);
            fill(0, 102, 153, 100);
            text('Score ', 50, 60);    
        textSize(25);
            fill(0, 102, 153, 100);
            score = counter * 10;
            text(score, 130, 60);

    let separation = false;

    for (let t of trains){
        if (t.x > width - 400)
        {
            separation = true;
        }
}
    if (random(1) < 0.01 && !separation) {
        trains.push(new Train());
    }

    unicorn.show();
    unicorn.move();

    for (let t of trains) {
        t.show();
        t.move();
    if (unicorn.hits(t)) {
            textSize(50);
            fill(0, 102, 153, 51);
            text('Game Over', 250, 200);
            noLoop();
            restart.mousePressed(replay);
            counter = 0;
        } 
    }

    for (var i = trains.length - 1; i >= 0; i--){
        if (trains[i].x < -100) {
            trains.splice (i,1);
            counter++;
        }
    }
    console.log(trains);
}