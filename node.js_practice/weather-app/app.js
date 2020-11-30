const request = require("request");

// https://api.openweathermap.org/data/2.5/onecall?lat=37.8267&lon=-122.4233&appid=a5b5d4833fb8a7a3f996cebcdb96093d api for latlon

//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a5b5d4833fb8a7a3f996cebcdb96093d api for weather using openapi

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=37.8267&lon=-122.4233&appid=a5b5d4833fb8a7a3f996cebcdb96093d&units=metric";
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather service!");
  } else if (response.body) {
    console.log("unable to find location!");
  } else {
    console.log(
      response.body.daily[0].weather[0].description +
        ". It is currently " +
        response.body.current.temp +
        " degree celcius"
    );
  }
});

const geocodeURL =
  "http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFtc2hpc2FpIiwiYSI6ImNraTRqN3h5aTBhejAydW1odXptZjd4eGQifQ.LJNsHzPOLjypBLgm59JHow&limit=1";
request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the geocode url");
  } else if (response.body.features.length===0) {
    console.log("unable to access location");
  } else {
    const longitude = response.body.features[0].center[1];
    const latitude = response.body.features[0].center[0];
  }
});
