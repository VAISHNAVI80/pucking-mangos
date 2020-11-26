
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boys,boy;


function preload()
{
	boys = loadImage ("boy.png");
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree = new Tree(685,369,200,200);

stone = new Stone (350,35,25,25);

mango1 = new Gum (765,370,50,50);
mango2 = new Gum (645,300,50,50);
mango3 = new Gum (715,335,45,45);
mango4 = new Gum (585,350,50,50);
mango5 = new Gum (670,325,25,25);

hen = new Rope (stone.body,{x:230,y:400});

ground1 = new Ground (500,470,1000,20);
boy = createSprite(260,430,50,50);
boy.addImage("basin",boys);
boy.scale=0.05;

}


function draw() {
  rectMode(CENTER);
  background("lavender");
  Engine.update(engine);
 
  text("PRESS SPACE FOR ANOTHER CHANCE",200,75);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
  
  
drawSprites();



tree.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

hen.display();

ground1.display();

}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
	mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.width/2+lstone.width/2){
	Matter.Body.setStatic(lmango.body,false);
}

}
function mouseDragged(){
 
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    hen.fly();
    

}
function keyPressed(){
if(keyCode===32){
	Matter.Body.setPosition(stone.body,{x:230,y:400})
	hen.attach(stone.body);
}
}