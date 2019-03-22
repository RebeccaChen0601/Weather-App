const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

const address = process.argv[2]
if(!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if(error) {
            return console.log('Error', error)
        }
        forecast(data.latitude, data.longtitude, (error, forecastData) => {
            if(error) {
                return console.log('Error', error)
            }
            console.log(Data.location)
            console.log(forecastData)
        })
    })
}
