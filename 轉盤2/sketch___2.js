function setup(){
  createCanvas(400,250);
  fill(92,121,56);
  textSize(40);
}
let shift=0, v=0;
function mousePressed(){
  v=random(10)+5;
}
function draw(){
  background(56,80,120);
  for(let i=0; i<6; i++){
    if(i==0) fill(234,104,104);
    if(i==1) fill(255,141,88);
    if(i==2) fill(244,247,85);
    if(i==3) fill(99,240,130);
    if(i==4) fill(111,147,234);
    if(i==5) fill(200,135,219);
    let start=radians(0+shift+i*360/6);
    let stop=radians(360/6+shift+i*360/6);
    arc(100,100,180,180,start,stop);
   }
  if(v>0.1){
  shift+=v;
  v=v*0.99;
  }
  fill(255);
  //text("I",180,125);
  //text("V",180,125);
  text("<--",180,110);
  fill(255);
  text(shift,200,200);
  text(v,200,150);
}
