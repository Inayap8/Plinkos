class Particles{
    constructor (x,y){
        this.x=x
        this.y=y
        this.r=10
        this.body=Bodies.circle(this.x,this.y,this.r,{restitution:0.2,density:1,friction:0.5,isStati:true})
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        push()
        fill(this.color)
        ellipseMode(RADIUS)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipse(0,0,this.r)
        pop()
    }
}
