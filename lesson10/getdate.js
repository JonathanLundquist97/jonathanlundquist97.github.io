window.onload = function () {
var monthArray = ["January","February","March", "April", "May","June","July","August","September", "October", "November","December"];
var dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var theDate = new Date();
var dayOfWeek = dayArray[theDate.getDay()];
var monthName = monthArray[theDate.getMonth()];
var finalDate = dayOfWeek+ " " + monthName + " " + theDate.getDate() +", "+ (theDate.getYear() + 1900);    
document.getElementById("currentDate").innerHTML = finalDate;
if (dayOfWeek == "Friday") {
	document.getElementById("advertisementSpot").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."; 
}
}
