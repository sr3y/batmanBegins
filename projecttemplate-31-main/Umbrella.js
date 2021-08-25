class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.image = loadImage("Images/Walking/walking_4.png");
        this.umbrella = Bodies.circle(x, y, 50, options);
        World.add(world, this.umbrella);
    }
    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 70, 300, 300)
    }
}