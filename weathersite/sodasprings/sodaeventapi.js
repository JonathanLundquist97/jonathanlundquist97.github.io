const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    document.getElementById('event1').textContent = towns[5].events[0];
    document.getElementById('event2').textContent = towns[5].events[1];
    document.getElementById('event3').textContent = towns[5].events[2];
})