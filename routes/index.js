var express = require('express');
var router = express.Router();
const getCoords = require("../utis/getCoord")
const getWeather = require("../utis/getWeather")
/* GET home page. */
//how to call your API
//How to render hbs
//how manage our routes
//how chain function
//handle error

router.get("/weather", function (req, res) {
  const query = req.query;
  //we use city name to get geo coodinates
  if (!query.city) {
    return res.redirect("/")
  };

  getCoords(res, query.city, getWeather)


  //use coordinates to fetch weather
})

router.get('/', function (req, res, next) {
  res.render('index', { title: 'My Weather App' });
});

module.exports = router;
