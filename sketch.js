const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var base;
var upper;
var left;
var right;
var l1,l2,l3,l4,l5,l6;
//var p1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 615;





function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  //RED FRAME
  base = new Ground(240,785,485,20);
  upper = new Ground(240,15,485,20);
  left = new Ground(10,400,20,750);
  right = new Ground(470,400,20,750);
//DIVISION
  l1 = new Division (70,divisionHeight,5,320);
  l2 = new Division (140,divisionHeight,5,320);
  l3 = new Division (210,divisionHeight,5,320);
  l4 = new Division (280,divisionHeight,5,320);
  l5 = new Division (350,divisionHeight,5,320);
  l6 = new Division (420,divisionHeight,5,320);
// CREATING WHITE STABLE BALLS
//var p1 = new Plinko(200,200,25)


}

function draw() {
  background("black");  
  Engine.update(engine);
  upper.display();
  base.display();
  left.display();
  right.display();
  l1.display();
  l2.display();
  l3.display();
  l4.display();
  l5.display();
  l6.display();
  //p1.display();
  drawSprites();
}