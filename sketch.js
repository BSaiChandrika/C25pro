
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(145,580,25);

	ground=new Ground(600,590,1200,20);

	dustbin=new Dustbin(870,440,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

    paper.display();

	ground.display();

	dustbin.display();
  	
	text (mouseX+","+mouseY,mouseX,mouseY);
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:-155});
	}
}



