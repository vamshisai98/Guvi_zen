let API_KEY = "9a27927ea537f7d25d51db23431cb9fd";

const URL = "https://api.openweathermap.org/data/2.5/weather";

window.onload = (event) => {

    let section_content = '<ul class="list-group">';
  
    let promiseData = fetch('https://restcountries.eu/rest/v2/all');
    promiseData.then((response) => {
      let data = response.json();
      data.then((obj) => {
        obj.map((val) => {
          if (val.latlng[0] && val.latlng[1]) {
            let temp = getWeatherOfCountry(val.latlng[0], val.latlng[1]);
            temp.then((response) => {
              section_content += `<li class='list-group-item'>${val.name} >>> ${response.main.temp}°C</li>`;
            }).catch((error) => {
              console.log(error)
            })
          }
        });
      });
    }).catch((error) => {
      console.log(error);
    });
  
    setTimeout(() => {
      section_content += '</ul>';
      document.getElementById('main-container').innerHTML = section_content;
    }, 5000);
  
  
  }
  
  getWeatherOfCountry = (lat, lng) => {
  
    const FULL_URL = `${URL}?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  
    let weatherPromise = fetch(FULL_URL)
    return weatherPromise.then((response) => {
      return response.json()
    }).catch((error) => {
      return error
    });
  
  }