class Drop{
    constructor(x, y){
        var options = {
            friction: 0.001,
            restitution: 0.1
        }
        this.radius = 5;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);

    }
    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})
        }
    }

    showDrop(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }
}