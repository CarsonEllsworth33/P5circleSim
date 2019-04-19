function newCirc(xPos,yPos,rad,famAtt = [spd = 0,dmg = 0,radOfSight = 0,clr = [0,0,0]],others = []){
  //insert circle functions
  this.xPos = xPos;
  this.yPos = yPos;
  this.rad = rad;
  this.famAtt = famAtt;
  this.spd = this.famAtt[0];
  this.dmg = this.famAtt[1];
  this.radOfSight = this.famAtt[2];
  this.color = this.famAtt[3];
  //float value meant to be degrees
  this.dir = random(0,360);
  this.otherFam = others;

  //draws the circle properly from the properties given
  //major function to be in turn
  this.show = function(){
    noStroke();
    fill(this.color[0],this.color[1],this.color[2]);
    ellipse(this.xPos,this.yPos,this.rad,this.rad);
    //insert this function into newcircle
    this.drawRing(255,255,255);
  }
  //handles the order in which a circle behaves
  this.circTurn = function(){
    this.show();
    this.lookFor();
    this.move();
  }

  //sends a call that other circles can hear
  this.call = function(){

  }

  //sends a callback to a heard call
  this.callBack = function(){

  }


  this.lookFor = function(){
    for(var i; i <= this.otherFam.length; i ++){
      for(var circ; circ<=this.otherFam[i].length; circ++){
        //distance between another circle and this circle
        var d = dist(this.xPos,this.yPos,this.otherFam[i][circ].xPos,this.otherFam[i][circ].yPos);
        if (d <= this.radOfSight){
          this.drawRing(255,0,0);
        }
      }
    }
  }


  //draws the search ring for the circle
  this.drawRing = function(r,g,b){
    noFill();
    stroke(r,g,b);
    ellipse(this.xPos,this.yPos,this.famAtt[2],this.famAtt[2]);
  }
  //this function handles the movement of the circle
  //major function to be in turn
  this.move = function(){
    this.xPos = this.xPos + (cos(this.dir)*this.spd);
    this.yPos = this.yPos + (sin(this.dir)*this.spd);
    //calls the edge checking function to make sure the circles do not go off screen
    this.checkEdge();
  }

  //handles the edge guard to make sure circles do not go off screen
  this.checkEdge = function() {
    if(this.xPos < 0){
      this.xPos = 0;
      this.setDir()
    }else if(this.xPos > width){
      this.xPos = width;
      this.setDir()
    }
    if(this.yPos < 0){
      this.yPos = 0;
      this.setDir()
    }else if(this.yPos > height){
      this.yPos = height;
      this.setDir()
    }

  }
  //handles the random direction change for a circle
  this.setDir = function(){
    this.dir = random(0,360);
  }

  //returns the color of the circle to help be used to identify its family type
  this.getClr = function(){
    return this.color
  }


}
