var rFam;
var gFam;
var bFam;
var num;
var families;

function setup() {

	createCanvas(1000, 700);
	rFam = new family(attackDmg = 10,mvmtSpeed = 1,radOfSight = 100,color = [255,0,0],startZone = [50,50]);
	gFam = new family(attackDmg = 8,mvmtSpeed = 2,radOfSight = 120,color = [0,255,0],startZone = [width - 50,50]);
	bFam = new family(attackDmg = 6,mvmtSpeed = 3,radOfSight = 90,color = [0,0,255],startZone = [width/2,height - 50]);
	num = random(5,10);
	rFam.spawn(num,20);
	gFam.spawn(num,20);
	bFam.spawn(num,20);
	rFam.setOthers(gFam,bFam);
	gFam.setOthers(rFam,bFam);
	bFam.setOthers(rFam,gFam);
	families = [rFam,gFam,bFam];
}

function draw() {
	//background
	background(50);
	//background
	for(var i = 0; i <= 2; i++){
		families[i].turn();
	}
}


function print(val){
	console.log.print(val);
}


function broadCast(orginX,orginY,callCastX,callCastY){

}
