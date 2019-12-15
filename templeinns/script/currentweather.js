//4315588 boston rouge id
const brouge = "http://api.openweathermap.org/data/2.5/weather?id=4315588&units=imperial&APPID=8d9637c75bb719f3641c11d321f1a8fa";
fetch(brouge)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('bat').textContent = jsObject.main.temp;
    });

//4930956 boston ID
const boston = "http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=8d9637c75bb719f3641c11d321f1a8fa";
fetch(boston)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('bot').textContent = jsObject.main.temp;
    });

//5780993 Salt Lake City ID
const saltlake = "http://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=8d9637c75bb719f3641c11d321f1a8fa";
fetch(saltlake)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('sat').textContent = jsObject.main.temp;
    });

//5809844 seattle ID
const seattle = "http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=8d9637c75bb719f3641c11d321f1a8fa";
fetch(seattle)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('set').textContent = jsObject.main.temp;
    });