class Box {
  constructor(x, y, side) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, side, side, options);
    this.width = side;
    this.height = side;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    fill(255);
    stroke("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
