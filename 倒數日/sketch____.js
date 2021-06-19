function setup(){
  createCanvas(800,400);
  fill(120,100,80);
  textSize(40);
}
function draw(){
  let h=hour();
  let m=minute();
  let d=day();
  let M=month();
  fill(25,55,55);
  text("today:"+M+"/"+d+" "+h+":"+m,100,100);
  let total=(d*12*60+h*60+m);
  let total2=25*12*60+16*60+40;
  text("summer vacation:6/25 16:40",100,200);
  let ans=total2-total;
  let hh=ans/60/60, mm=ans%60, dd=ans/60/12;
  let hhh=nfs(hh=ans/60/60,1,0);
  let mmm=nfs(mm=ans%60,1,0);
  let ddd=nfs(dd=ans/60/12,1,0);
  text(+ddd+"day "+hhh+"h "+mmm+"m",100,300);
}
