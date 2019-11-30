var currentHigh = Math.floor((Math.random() * 100) + 1);
var currentWind = Math.floor((Math.random() * 50) + 1);
document.getElementById("tempHigh").innerHTML = currentHigh;
document.getElementById("windSpeed").innerHTML = currentWind;
var chillCalc = 35.74 + 0.6215 * currentHigh - 35.75 * currentWind ** 0.16 + 0.4275 * currentHigh * currentWind ** 0.16;
if (chillCalc > 50 || currentWind < 4.8) {
document.getElementById("windChill").innerHTML = "N/A";
} else {
document.getElementById("windChill").innerHTML = Math.round(chillCalc) + "°";
}