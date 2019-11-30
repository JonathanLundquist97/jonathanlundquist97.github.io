const currentweatherapi = "http://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=8d9637c75bb719f3641c11d321f1a8fa";

fetch(currentweatherapi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('high').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed;

        var windchillhigh = jsObject.main.temp_max;
        var windchillspeed = jsObject.wind.speed;
        var chillcalc = 35.74 + 0.6215 * windchillhigh - 35.75 * windchillspeed ** 0.16 + 0.4275 * windchillhigh * windchillspeed ** 0.16;
        if (chillcalc > 50 || windchillspeed < 4.8) {
        document.getElementById("windchill").innerHTML = "N/A";
        } else {
        document.getElementById("windchill").innerHTML = Math.round(chillcalc);
        }
    });

    