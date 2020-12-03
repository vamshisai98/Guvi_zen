const geocode = require('./util.js/geocode')
const forecast = require('./util.js/forecast')
const address = process.argv[2]
console.log(process.argv)


if (!address) {
    console.log("Please provide your address")
} else {
    geocode(address, (error, {latitude,longitude,location}) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    });
}