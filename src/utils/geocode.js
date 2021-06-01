const request = require('request')

const geocode = (address, callback) => {
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicHJpeWF0YW0xMiIsImEiOiJja3A3NzJwNXAwODRjMndtanNuODczZjhzIn0.SsVAiO6Uja2AA2U_sLoBhg&limit=1'
    request({url: geoCodeUrl, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable To Connect Location Service', undefined)
        }else if (body.features.length === 0) {
            callback('Unable To Find Location, Try Another Search', undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            } )
        }
    })
}

module.exports = geocode