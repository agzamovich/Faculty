var countDownDate = new Date("Jun 13, 2019 09:30:00").getTime();
var countDownfunction = setInterval(function(){
var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + "<br>" + "<br>" + "<br>" + minutes + "M " + seconds + "S";


if(distance < 0){
	clearInterval(countDownfunction);
	document.getElementById("countdown").innerHTML = "EXPIRED";
}
}, 1000);

