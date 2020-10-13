const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, pig1, ground, log, box3, box4, pig2, log2, log3, log4, box5, bird1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,80);
    box2 = new Box(800,300,80);
    box3 = new Box(600,220,80);
    box4 = new Box(800,220,80);
    ground = new Ground(600,height - 10,1200,20);
    pig1 = new Pig(700, 300);
    pig2 = new Pig(700, 220);
    log = new Log(700, 220, 450, PI/2);
    log2 = new Log(700, 130, 450, PI/2);
    log3 = new Log(625, 20, 200, PI/7);
    log4 = new Log(778, 20, 200, -PI/7);
    box5 = new Box(700, 30, 92);
    bird1 = new Bird(100, 100, "yellow");
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log2.display();
    log.display();
    log3.display();
    log4.display();
    box5.display();
    bird1.display();
}