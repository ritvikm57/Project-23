var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, BoxBodyBottom, BoxBodyBottomSprite, BoxBodyLeft, BoxBodyLeftSprite, boxBodyRight, boxBodyRightSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	BoxBodyBottomSprite=createSprite(width/2, 640,200,20);
	BoxBodyBottomSprite.shapeColor=color("red");

	BoxBodyLeftSprite=createSprite(300, 595,20,100);
	BoxBodyLeftSprite.shapeColor=color("red");

	boxBodyRightSprite=createSprite(500, 595,20,100);
	boxBodyRightSprite.shapeColor=color("red");
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	BoxBodyBottom = Bodies.rectangle(width/2 , 640, 200 ,30, {isStatic:true})
	World.add(world, BoxBodyBottom);
	
	BoxBodyLeft = Bodies.rectangle(300, 595, 20 ,100, {isStatic:true})
	World.add(world, BoxBodyLeft);

	boxBodyRight = Bodies.rectangle(500, 595, 20 ,100, {isStatic:true})
	World.add(world, boxBodyRight);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  BoxBodyBottomSprite.x=BoxBodyBottom.position.x
  BoxBodyBottomSprite.y=BoxBodyBottom.position.y

  BoxBodyLeftSprite.x=BoxBodyLeft.position.x
  BoxBodyLeftSprite.y=BoxBodyLeft.position.y

  boxBodyRightSprite.x=boxBodyRight.position.x
  boxBodyRightSprite.y=boxBodyRight.position.y

  keyPressed(); 
  drawSprites();
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}



