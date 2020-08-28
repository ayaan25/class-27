class Slingshot{
    constructor(bodyA,pointB){
        var options= {
             bodyA:bodyA,pointB:pointB,stiffness: 0.5,length:30
        }
        this.pointB = pointB;
        this.sling=Constraint.create(options);
      World.add(world,this.sling); 
    }
    display(){
    var pa = this.sling.bodyA.position;
    var pb = this.pointB;
    push ();
    strokeWeight(5);
    line(pa.x,pa.y,pb.x,pb.y);
    pop();
    }
}