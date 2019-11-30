const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=8d9637c75bb719f3641c11d321f1a8fa";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('monday').textContent = jsObject.list[6].main.temp;
        document.getElementById('tuesday').textContent = jsObject.list[14].main.temp;
        document.getElementById('wednesday').textContent = jsObject.list[22].main.temp;
        document.getElementById('thursday').textContent = jsObject.list[30].main.temp;
        document.getElementById('friday').textContent = jsObject.list[38].main.temp;

        const mondayimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png';
        const mondesc = jsObject.list[6].weather[0].description;
        document.getElementById('mondayicon').setAttribute('src', mondayimagesrc);
        document.getElementById('mondayicon').setAttribute('alt', mondesc);

        const tuesimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[14].weather[0].icon + '.png';
        const tuesdesc = jsObject.list[14].weather[0].description;
        document.getElementById('tuesicon').setAttribute('src', tuesimagesrc);
        document.getElementById('tuesicon').setAttribute('alt', tuesdesc);

        const wedimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[22].weather[0].icon + '.png';
        const weddesc = jsObject.list[22].weather[0].description;
        document.getElementById('wedicon').setAttribute('src', wedimagesrc);
        document.getElementById('wedicon').setAttribute('alt', weddesc);

        const thurimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[30].weather[0].icon + '.png';
        const thurdesc = jsObject.list[30].weather[0].description;
        document.getElementById('thuricon').setAttribute('src', thurimagesrc);
        document.getElementById('thuricon').setAttribute('alt', thurdesc);

        const friimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[38].weather[0].icon + '.png';
        const fridesc = jsObject.list[38].weather[0].description;
        document.getElementById('friicon').setAttribute('src', friimagesrc);
        document.getElementById('friicon').setAttribute('alt', fridesc);
    });

    