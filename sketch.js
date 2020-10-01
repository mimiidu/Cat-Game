let unicorn;
let cImg;
let sImg;
let mImg;
let bImg;
let cupImg;
let cdownImg;
let trains = [];
let counter = 0;
let score = 0;
let classifier;
let label;
let gameOver;
const options = { probabilityThreshold: 0.7 } ;

function preload() {
    cImg = loadImage('catrun.gif');
    cupImg = loadImage('runningcat12.png');
    cdownImg = loadImage('runningcat4.png');
    sImg = loadImage('puddle.png');
    bImg = loadImage('roughbackground.png');
    mImg = loadImage('strawberry.png');
    //classifier = ml5.soundClassifier('SpeechCommands18w', options);
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/VFFRe9SWK/model.json', options);
}

function setup() {
    classifyAudio();
    createCanvas(960, 540);
    unicorn = new Cat();
    // restart = createButton('Play Again');
}

function classifyAudio() {
    // while (!classifier.classify){
    //     setTimeout(() => {}, 0);
    // }
    setTimeout(() => classifier.classify(gotResults), 5000);
    // classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    label = results[0].label;
}

function replay() {
    trains = [];
    loop();
}

function mousePressed() {
    if (gameOver){
        replay();
        //puddle disappears when I click :(
    }
}

function keyPressed() {
    if (key == ' '){
        unicorn.jump();
    }
}

function draw() {

    background(bImg);
    gameOver = false;

    textSize(25);
            fill(0, 102, 153, 100);
            text('Score ', 30, 80);    
        textSize(25);
            fill(0, 102, 153, 100);
            score = counter * 10;
            text(score, 100, 80);

    let separation = false;

    unicorn.show();
    unicorn.move();

    for (let t of trains){
        if (t.x > width - 500)
        {
            separation = true;
        }
}
    if (random(1) < 0.01 && !separation) {
        trains.push(new Train());
    }

    for (let t of trains) {
        t.show();
        t.move();
    if (unicorn.hits(t)) {
            textSize(75);
            fill(0, 102, 153, 100);
            text('Game Over', 300, 200);
            textSize(35);
            fill(0, 102, 153, 75);
            text('Score:', 410, 250);
            text(score, 520, 250);
            text('Press anywhere to play again', 275, 300);
            gameOver = true;
            noLoop();
            counter = 0;
            cnv.mousePressed(replay);
            // restart.keyPressed(replay);
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