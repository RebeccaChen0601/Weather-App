const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoicmViZWNjYWNoZW4xOTk4MDYwMSIsImEiOiJjanRhZ2Y2Zm0wYW13NDRvOXk2em5iaW83In0.L5EpMbsbQK4xHgaqaIHv1w&limit=1"

    request({url: url, jason: true}, (error, response) => {
        console.log(JSON.stringify(response.body.features))
        if(error) {
            callback('Unable oto connect to location services!', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude : response.body.features[0].center[0],
                longtitude : response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode