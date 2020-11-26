class Gum {
    constructor(x,y,width,height)
    {
        var options={
    'isStatic':true,
    'density':1,
    'friction':0.8,
    'restitution':0.8
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
this.image=loadImage("mango.png");
    World.add(world,this.body)
    }
display ()
{
   
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}
}