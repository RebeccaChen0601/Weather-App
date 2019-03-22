const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1a5a12bac4a8de061bbe642eb8f7c7aa/' + latitude + ',' + longtitude + '?units=si'

    request({url: url, jason: true}, (error, response) => {
        if(error) {
            callback('Unable oto connect to location services!', undefined)
        } else if(response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature : response.body.currently.temperature,
                precipProbability : response.body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast