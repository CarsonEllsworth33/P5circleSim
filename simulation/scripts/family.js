function family(attackDmg,mvmtSpeed,radOfSight,color,startZone){
  this.radOfSight = radOfSight;
  this.Dmg = attackDmg;
  this.speed = mvmtSpeed;
  this.Color = color;
  this.objects = [];
  this.others = [];
  this.fXYStart = startZone;
  this.numObs = 0;

  this.spawn = function(nums,r){
    this.numObs = nums;
    for(;nums >= 0; nums--){
      this.objects.push(new newCirc((this.fXYStart[0] + random(-50,50)),(this.fXYStart[1] + random(-50,50)),r, famAtt = [this.speed,this.Dmg,this.radOfSight,this.Color],others = this.others));
    }
  }

  //cycles through circles and makes them take their turn
  this.turn = function(){
    for(var n = 0; n<=this.numObs;n++){
      this.objects[n].circTurn();

    }
  }

  this.setOthers = function(fam1,fam2){
    this.others.push(fam1);
    this.others.push(fam2);
  }
}
