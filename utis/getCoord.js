

function getCoord(res, city, callback) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city
    )}.json?access_token=${process.env.MAPBOX}`
    request({ url: url, json: true }, callback)

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            return res.render("weather", {error : "something is wrong while fetching your location"})
        }

        if(body.features && body.features.length === 0) {
            return res.render("weather", {error : "We can't find your location"})
        }
        const [lng, lat] = body.features[0].geometry.coordinates

        callback(res, lng, lat)
    })
}
module.exports = getCoord;