const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 1; i <= 5; i++ ) { 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let a = document.createElement('h4');
        let b = document.createElement('p');
        let c = document.createElement('p');
        let d = document.createElement('p');
        let image = document.createElement('img');

          h2.textContent = towns[i].name;
          a.textContent = towns[i].motto;
          b.textContent = 'Year Founded: '+ towns[i].yearFounded;
          c.textContent = 'Population: '+ towns[i].currentPopulation;
          d.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
          image.setAttribute('src', towns[i].photo);
        

        
          card.appendChild(h2);
          card.appendChild(a);
          card.appendChild(b);
          card.appendChild(c);
          card.appendChild(d);
          card.appendChild(image);

          document.querySelector('div.cards').appendChild(card);
    }
});



