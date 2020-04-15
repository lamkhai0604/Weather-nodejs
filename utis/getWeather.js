

function getWeather(res, lng, lat) {
    const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY}/${lat},${lng}`
    request({ url: url, json=true }, (error, { body }) => {
        if (error) {
            return res.render("weather", {error : "something is wrong while fetching your the weather"})
        }
        const temp = body.currently.temperature
        res.render("weather", {
            temp: temp
        })
    })
}

module.exports = getWeather

network