var width, height, color;

class Bird{
    constructor(x, y, type) {
        var bird_options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.5
        }
        if (type === "red") {
            width = 30;
            height = 30;
            color = "red";
        }
        if (type === "yellow") {
            width = 50;
            height = 50;
            color = "yellow";
        }
        this.body = Bodies.rectangle(x, y, width, height, bird_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}