const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,stand1,stand2;
//blocks for tower 1
var block1,block2,block3,block4,block5,block6,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot;
var polygon,polygonimg;
var score = 0;
function preload()
{
	polygonimg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1300, 500);

	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground1 = new Ground(650,490,1300,20);
	stand1 = new Ground(330,370,300,10);
	stand2 = new Ground(630,170,300,10);

	polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);

	slingShot = new SlingShot(this.polygon,{x : 100 , y : 100});

	//creating blocks for tower 1
	
	block1 = new Box(570,140,30,40);
	block2 = new Box(600,140,30,40);
	block3 = new Box(630,140,30,40);
	block4 = new Box(660,140,30,40);
	block5 = new Box(690,140,30,40);
	block6 = new Box(600,100,30,40);
	block7 = new Box(630,100,30,40);

	block8 = new Box(660,100,30,40);
	block9 = new Box(630,60,30,40);
	block10 = new Box(240,340,30,40);
	block11 = new Box(270,340,30,40);
	block12 = new Box(300,340,30,40);
	
	block13 = new Box(330,340,30,40);
	block14 = new Box(360,340,30,40);
	block15 = new Box(390,340,30,40);
	
	block16 = new Box(420,340,30,40);

	//creating blocks for tower 2
	//level 1
	block17 = new Box(270,300,30,40);
	block18 = new Box(300,300,30,40);
	block19 = new Box(330,300,30,40);
	block20 = new Box(360,300,30,40);
	block21 = new Box(390,300,30,40);
	block22 = new Box(300,260,30,40);
	block23 = new Box(330,260,30,40);
	block24 = new Box(360,260,30,40);
	block25 = new Box(330,220,30,40);
	

	



  
}


function draw() {
  background(0);

  ground1.display();
  stand1.display();
  stand2.display();
  // display for tower 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //display for tower 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  slingShot.display();

  text("SCORE : "+score,750,40);

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();


  

  
  imageMode(CENTER);
  image(polygonimg,polygon.position.x,polygon.position.y,40,40);

 
}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		slingShot.attach(this.polygon);
	}
}
