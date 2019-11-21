import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {LocalWeatherService} from './LocalWeatherService.js';
import {MarsWeatherService} from './weatherService.js';

$(document).ready(function() {


  (async () => {
    let marsWeather = new MarsWeatherService();
    const response = await marsWeather.getWeatherByCity();
    getMars(response);
  })();

  (async () => {
    let localweatherService = new LocalWeatherService();
    const response = await localweatherService.getLocalWeather();
    getEarth(response);
  })();

  const getMars = (response) => {
    const solkeys = response.sol_keys;
    $("#marsResults").text(`This is the Mars temperature:  ${response[solkeys[0]].AT.av}˚F`);
  };

  const getEarth = (response) => {
    $("#weatherResults").text(`This is the Earth temperature:  ${response.hours[0].airTemperature[0].value}˚F`);
    console.log(response);
  };
});
