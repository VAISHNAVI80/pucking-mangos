class Stone {
    constructor(x,y,width,height)
    {
        var options={
    'isStatic':false,
    'density':1.2,
    'friction':1,
    'restitution':0
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("stone.png");
    World.add(world,this.body)
    }
display ()
{
    var body = this.body.body;
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}
}