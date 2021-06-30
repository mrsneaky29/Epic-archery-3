class PlayerArcher{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x, y,width,height);
        this.x=this.x
        this.y=this.y
        this.width=this.width
        this.height=this.height
        World.add(world,body)
        Matter.Body.setAngle(this.body,-PI/2)
        if(move="UP"&&playerArcher.body.angle<1.77){
            angleValue=0.1;
        }
        else{
            angleValue=-0.1;
        }

        if(move="DOWN"&&playerArcher.body.angle>1.47){
            angleValue=-0.1
        }
        else{
            angleValue=0.1
        }
    }
}