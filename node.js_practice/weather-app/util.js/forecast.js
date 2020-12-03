const request = require('request')

const forecast = (lat,long,callback)=>{
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=a5b5d4833fb8a7a3f996cebcdb96093d&units=metric`
request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect')
    }
    else if(body.error){
        callback('unable to find location')
    }
    else{
        callback(undefined,body.daily[0].weather[0].description +". It is currently "+ body.current.temp + " degree celcius")
    }
})
}
module.exports= forecast