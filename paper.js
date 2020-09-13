class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.2,
          'friction':0.5,
          'density':1.8
      }

      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }

  display(){
  
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipse( 0, 0);
    pop();
  }
}