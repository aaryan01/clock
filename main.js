function clock(){
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

if(hours<12) hours = (hours/12) *360;
else if(hours>12) hours = (hours-12/12) *360;

seconds = (seconds/60) * 360;
minutes = (minutes/60) * 360;
document.getElementsByClassName('seconds').style.transform = "rotateZ("+seconds+"deg)";
document.getElementsByClassName('minutes').style.transform = "rotateZ("+minutes+"deg)";
document.getElementsByClassName('hours').style.transform = "rotateZ("+hours+"deg)";

}

setInterval(clock,1000);
