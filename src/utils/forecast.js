const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=20b236dd91c4836391ee5d5a43078a0b&query='+ latitude +','+ longitude 
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect with Weather Service', undefined)
        } else if (body.error) {
            callback('Unable to Find Location weather, Please Enter Correct Location', undefined)
        } else {
            callback(undefined, 'Weather Observation Time...'+body.current.observation_time + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.'
)
        }
    })
}

module.exports = forecast