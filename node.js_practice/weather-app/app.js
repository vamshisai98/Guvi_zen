const request = require('request')


// https://api.openweathermap.org/data/2.5/onecall?lat=37.8267&lon=-122.4233&appid=a5b5d4833fb8a7a3f996cebcdb96093d api for latlon

//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a5b5d4833fb8a7a3f996cebcdb96093d api for weather using openapi

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8267&lon=-122.4233&appid=a5b5d4833fb8a7a3f996cebcdb96093d&units=metric'
request({ url: url,json:true }, (error, response) => {
    console.log(response.body.daily[0].weather[0].description+ '. It is currently '+ response.body.current.temp +' degree celcius') 
})