function setup(){
  createCanvas(400,200);
  fill(237,225,86);
  textSize(40);
}
let shift=0, v=0;
function mousePressed(){
  v=random(10)+5;
}
function draw(){
  background(134,151,255);
  for(let i=0; i<24; i++){
    if(i%3==0) fill(247,250,86);
    if(i%3==1) fill(255);
    if(i%3==2) fill(133,132,152);
    if(i==0) fill(255,113,77);
    let start=radians(0+shift+i*360/24);
    let stop=radians(360/24+shift+i*360/24);
    arc(100,100,180,180,start,stop);
   }
  if(v>0.1){
  shift+=v;
  v=v*0.99;
  }
  text(shift,200,100);
  text(v,200,150);
}
