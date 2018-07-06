function clock(){
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


hours = (hours % 12) * 30;
seconds = (seconds/60) * 360;
minutes = (minutes/60) * 360;
document.getElementsByClassName('seconds')[0].style.transform = "rotateZ("+seconds+"deg)";
document.getElementsByClassName('minutes')[0].style.transform = "rotateZ("+minutes+"deg)";
document.getElementsByClassName('hours')[0].style.transform = "rotateZ("+hours+"deg)";

}

setInterval(clock,1000);
