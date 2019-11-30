/*const eventAPI = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8d9637c75bb719f3641c11d321f1a8fa";*/

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    document.getElementById('event1').textContent = towns[4].events[0];
    document.getElementById('event2').textContent = towns[4].events[1];
    document.getElementById('event3').textContent = towns[4].events[2];
})